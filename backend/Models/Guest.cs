using System;
namespace backend.Models
{
    public class Guest
    {
        public int Id { get; set; }
        public string guestName { get; set; }
        public string guestSurname { get; set; }
        public string FromWhere { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public int placeId { get; set; }
    }
}