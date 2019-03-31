using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public class OfficeForRegister
    {
        [Required]
        public string officeName { get; set; }
         [Required]
        public string officeNumber { get; set; }
        public int employeeId { get; set; }
        public int guestId { get; set; }
    }
}