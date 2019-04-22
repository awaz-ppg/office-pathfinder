using WebAPI.Models;

namespace WebAPI.Models
{
    public class Printer : BaseEntity
    {
        public string Number { get; set; }
        public bool IsColor { get; set; }
    }
}