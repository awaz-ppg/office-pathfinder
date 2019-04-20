using System;
using WebAPI.Models;

namespace backend.Models
{
    public class Guest : BaseEntity
    {
        public string guestName { get; set; }
        public string guestSurname { get; set; }
        public string FromWhere { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public string placeId { get; set; }
    }
}