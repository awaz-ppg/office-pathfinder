using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Employee : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsCoordinator { get; set; }
        public string Team { get; set; }
        public bool IsVolunteer { get; set; }
        public string placeId { get; set; }
    }
}
