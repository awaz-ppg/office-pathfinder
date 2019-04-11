namespace backend.Models
{
    public class Desk
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int NumberDesk { get; set; }
        
        public bool IsCoordinator { get; set; }
        public string Team { get; set; }
        public bool IsVolunteer { get; set; }
    }
}