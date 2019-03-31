using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
       public AuthController(IAuthRepository repo, IConfiguration config)
       {
           _repo = repo;
           _config = config;
       }
       
        //[Authorize(Policy = "RequireAdministratorRole")]
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] AdminForAuth admin)
        {

            admin.Login = admin.Login.ToLower();

            if(await _repo.WorkerExists(admin.Login))
            return BadRequest("Login already exists");

            var adminToCreate = new Admin
            {
                Login = admin.Login
            };
            var createdWorker = await _repo.Register(adminToCreate,admin.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] AdminForAuth admin)
        {
            var adminFromRepo = await _repo.Login(admin.Login.ToLower(), admin.Password);

            if(adminFromRepo == null)
            return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, adminFromRepo.Login.ToString()),
                new Claim(ClaimTypes.Role,"administrator"),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }

    }
}