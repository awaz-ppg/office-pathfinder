namespace backend.Models
{
    public class Kitchen
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Name { get; set; }
        public bool IsCoffee { get; set; }
        public bool IsWater { get; set; }
    }
}