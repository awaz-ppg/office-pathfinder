namespace backend.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public byte[] PasswordHash { get; set; }
         public byte[] PasswordSalt { get; set; }
    }
}