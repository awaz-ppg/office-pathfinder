using WebAPI.Models;

namespace backend.Models
{
    public class Room : BaseEntity
    {
        public int NumberOfPeople { get; set; }
        public string Description { get; set; }
        public string roomName { get; set; }
        public string roomNumber { get; set; }
        public bool IsTV { get; set; }
        public bool IsBlackboard { get; set; }
        public bool IsPhone { get; set; }

    }
}