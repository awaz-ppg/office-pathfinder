using WebAPI.Models;

namespace backend.Models
{
    public class Kitchen : BaseEntity
    {
        public string Number { get; set; }
        public string Name { get; set; }
        public bool IsCoffee { get; set; }
        public bool IsWater { get; set; }
    }
}