using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public class RoomForRegister
    {
        public int employeeId { get; set; }
        public int guestId { get; set; }
        [Required]
        public string roomName { get; set; }
        [Required]
        public string roomNumber { get; set; }
    }
}