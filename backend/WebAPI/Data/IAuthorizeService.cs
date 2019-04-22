using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Data
{
    public interface IAuthorizeService
    {
        string Authenticate(Admin admin);
        Task<bool> CreateAdminAccount(Admin admin);
    }
}