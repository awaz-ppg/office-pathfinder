using WebAPI.Models;

namespace WebAPI.Models
{
    public class Kitchen : BaseEntity
    {
        public string Number { get; set; }
        public string Name { get; set; }
        public bool IsCoffee { get; set; }
        public bool IsWater { get; set; }
    }
}