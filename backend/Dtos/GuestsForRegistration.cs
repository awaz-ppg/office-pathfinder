using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
    public class GuestsForRegistration
    {
        [Required]
        public string guestName { get; set; }
        [Required]
        public string guestSurname { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public int placeId { get; set; }
    }
}