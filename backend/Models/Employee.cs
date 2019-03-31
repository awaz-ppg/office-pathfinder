namespace backend.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string employeeName { get; set; }
        public string employeeSurname { get; set; }
        public string employeePosition { get; set; }
        public int placeId { get; set; }
    }
}