using Microsoft.EntityFrameworkCore;
using CinemaManager.API.Models;

namespace CinemaManager.API.Data
{
    public class CinemaDbContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
        public DbSet<CinemaHall> CinemaHalls { get; set; }
        public DbSet<ScheduleItem> ScheduleItems { get; set; }
        
        public DbSet<Employee> Employees { get; set; }

        public DbSet<Account> Accounts { get; set; }

        public CinemaDbContext(DbContextOptions<CinemaDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
    
            // Configure one-to-one relationship properly
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Account)
                .WithOne(a => a.Employee)
                .HasForeignKey<Account>(a => a.EmployeeId);
    
            // Create fixed GUIDs for seeding
            var managerEmployeeId = Guid.Parse("11111111-1111-1111-1111-111111111111");
            var managerAccountId = Guid.Parse("22222222-2222-2222-2222-222222222222");
            var regularEmployeeId = Guid.Parse("33333333-3333-3333-3333-333333333333");
            var regularAccountId = Guid.Parse("44444444-4444-4444-4444-444444444444");

            // Seed employee first
            modelBuilder.Entity<Employee>().HasData(
                new Employee
                {
                    Id = managerEmployeeId,
                    name = "menago",
                    role = "manager"
                },
                new Employee
                {
                    Id = regularEmployeeId,
                    name = "regular",
                    role = "regular_employee"
                }
            );

            // Then seed accounts
            modelBuilder.Entity<Account>().HasData(
                new Account
                {
                    Id = managerAccountId,
                    Pin = 1234,
                    EmployeeId = managerEmployeeId
                },
                new Account
                {
                    Id = regularAccountId,
                    Pin = 4321,
                    EmployeeId = regularEmployeeId
                }
            );
        }
        
    }
}
