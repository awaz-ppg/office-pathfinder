using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Data
{
    public interface IAuthRepository
    {
        Task<Admin> Register(Admin admin, string password);
        Task<Admin> Login(string login, string password);
        Task<bool> WorkerExists(string username);
    }
}