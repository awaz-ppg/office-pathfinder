using System.Threading.Tasks;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Admin> Login(string login, string password)
        {
            var user = await _context.Admin.FirstOrDefaultAsync(x => x.Login == login);

            if(user == null)
            return null;

            if (!VerifyPasswordHash(password,user.PasswordHash,user.PasswordSalt))
            return null;

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for(int i=0; i<computedHash.Length; i++)
                {
                    if(computedHash[i] != passwordHash[i])
                    return false;
                }
            }
            return true;
        }

         public async Task<Admin> Register(Admin admin, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password,out passwordHash,out passwordSalt);
            admin.PasswordHash = passwordHash;
            admin.PasswordSalt = passwordSalt;
            await _context.Admin.AddAsync(admin);
            await _context.SaveChangesAsync();

            return admin;
        }
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> WorkerExists(string login)
        {
            if(await _context.Admin.AnyAsync(X => X.Login == login))
            return true;

            return false;
        }
    }
}