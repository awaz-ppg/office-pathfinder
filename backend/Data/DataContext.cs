using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class DataContext : DbContext
    {
       public DataContext(DbContextOptions<DataContext> options) : base (options)
       {
           
       } 

       public DbSet<Admin> Admin {get; set;}
       public DbSet<Employee> Employees {get; set;}
       public DbSet<Guest> Guests {get; set;}
       public DbSet<Office> Offices {get; set;}
       public DbSet<Room> Rooms {get; set;}
    }
}