using backend.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class AuthorizeService : IAuthorizeService
    {
        private const string CollectionName = "AdministratorsCollection";
        private readonly IConfiguration _config;
        private readonly ICosmosDbRepository<Admin> _repository;

        public AuthorizeService(IConfiguration config, ICosmosDbRepository<Admin> repository)
        {
            _config = config;
            _repository = repository;
        }

        public string Authenticate(Admin admin)
        {
            if (CheckLoginAndPassword(admin))
                return BuildToken(admin);

            return null;
        }

        private bool CheckLoginAndPassword(Admin admin)
        {
            var entities = _repository.GetAllEntities(CollectionName);

            if (entities.Exists(p => p.Login == admin.Login
            && p.Password == Eramake.eCryptography.Encrypt(admin.Password)))
            {
                return true;
            }

            return false;
        }

        private string BuildToken(Admin admin)
        {
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.UniqueName, admin.Login),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(600),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<bool> CreateAdminAccount(Admin admin)
        {
            if (LoginExist(admin))
                return false;

            admin.Password = Eramake.eCryptography.Encrypt(admin.Password);

            await _repository.InsertEntityAsync(CollectionName, admin);
            return true;
        }

        private bool LoginExist(Admin admin)
        {
            var entities = _repository.GetAllEntities(CollectionName);
            if (entities.Exists(p => p.Login == admin.Login))
                return true;

            return false;
        }
    }
}