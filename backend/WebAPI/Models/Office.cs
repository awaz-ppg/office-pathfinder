using WebAPI.Models;

namespace backend.Models
{
    public class Office : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NumberDesk { get; set; }
        
        public string Position {get; set;}
        public bool IsCoordinator { get; set; }
        public string Team { get; set; }
        public bool IsVolunteer { get; set; }
    }
}