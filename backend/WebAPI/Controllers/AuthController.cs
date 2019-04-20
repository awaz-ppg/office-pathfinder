using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class AuthorizeController : Controller
    {
        private readonly IAuthorizeService _authorizeService;

        public AuthorizeController(IAuthorizeService authorizeService)
        {
            _authorizeService = authorizeService;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateToken([FromBody] AdminForAuth model)
        {
            IActionResult response = Unauthorized();

            var admin = new Admin
            {
                Login = model.Login,
                Password = model.Password,
            };

            var tokenString = _authorizeService.Authenticate(admin);
            if (tokenString != null)
                return Ok(new { token = tokenString });

            return response;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] AdminForAuth model)
        {
            var admin = new Admin
            {
                Login = model.Login,
                Password = model.Password,
            };

            var operationSucceeded =
                await _authorizeService.CreateAdminAccount(admin);

            if (operationSucceeded)
                return Ok();

            return BadRequest();
        }

        [HttpGet, Authorize]
        public IActionResult GetLoginOfLoggedUser()
        {
            var currentUser = HttpContext.User;
            var login = currentUser.Claims.First(c => c.Type == ClaimTypes.Name).Value;
            return Ok(login);
        }
    }
}