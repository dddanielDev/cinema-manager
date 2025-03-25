using Microsoft.EntityFrameworkCore;
using CinemaManager.API.Models;

namespace CinemaManager.API.Data
{
    public class CinemaDbContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
        public DbSet<CinemaHall> CinemaHalls { get; set; }
        public DbSet<ScheduleItem> ScheduleItems { get; set; }


        public CinemaDbContext(DbContextOptions<CinemaDbContext> options) : base(options)
        {
        }
    }
}
