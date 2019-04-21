using System.ComponentModel.DataAnnotations;
namespace backend.Dtos
{
    public class AdminForAuth
    {
        [Required]
        public string Login { get; set; }
        [Required]
        public string Password { get; set; }
    }
}