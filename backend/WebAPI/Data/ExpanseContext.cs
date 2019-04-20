using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Data
{
    public class ExpanseContext : DbContext
    {
        public ExpanseContext(DbContextOptions<ExpanseContext> options) : base(options)
        {
            
        }

        public DbSet<Admin> Admins {get; set;}
        public DbSet<Desk> Desks { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Kitchen> Kitchens { get; set; }
        public DbSet<Office> Offices { get; set; }
        public DbSet<Printer> Printers { get; set; }
        public DbSet<Room> Rooms { get; set; }
    }
}