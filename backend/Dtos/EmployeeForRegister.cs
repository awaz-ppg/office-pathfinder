using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public class EmployeeForRegister
    {
        [Required]
        public string employeeName { get; set; }
        [Required]
        public string employeeSurname { get; set; }
        [Required]
        public string employeePosition { get; set; }
        public int placeId { get; set; }
    }
}