using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public class GuestsForRegistration
    {
        [Required]
        public string GuestName { get; set; }
        [Required]
        public string GuestSurname { get; set; }
        public string FromWhere { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string PlaceId { get; set; }
    }
}