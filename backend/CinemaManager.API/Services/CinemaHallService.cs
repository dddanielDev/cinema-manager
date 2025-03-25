using CinemaManager.API.Data;
using CinemaManager.API.Models;

namespace CinemaManager.API.Services
{
    public class CinemaHallService
    {
        private readonly CinemaDbContext _context;

        public CinemaHallService(CinemaDbContext context)
        {
            _context = context;
        }

        public IEnumerable<CinemaHall> GetAllHalls()
        {
            return _context.CinemaHalls.ToList();
        }

        public CinemaHall AddHall(string name, int capacity)
        {
            var hall = new CinemaHall(name, capacity);
            _context.CinemaHalls.Add(hall);
            _context.SaveChanges();
            return hall;
        }
    }
}
