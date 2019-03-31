namespace backend.Models
{
    public class Room
    {
        public int Id { get; set; }
        public int employeeId { get; set; }
        public int guestId { get; set; }
        public string roomName { get; set; }
        public string roomNumber { get; set; }
    }
}