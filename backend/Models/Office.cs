namespace backend.Models
{
    public class Office
    {
        public int Id { get; set; }
        public string officeName { get; set; }
        public string officeNumber { get; set; }
        public int employeeId { get; set; }
        public int guestId { get; set; }
    }
}