using System.Threading.Tasks;
using backend.Models;

namespace WebAPI.Interfaces
{
    public interface IAuthorizeService
    {
        string Authenticate(Admin admin);
        Task<bool> CreateAdminAccount(Admin admin);
    }
}