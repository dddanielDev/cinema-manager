using CinemaManager.API.Data;
using CinemaManager.API.Models;
using Microsoft.EntityFrameworkCore;


namespace CinemaManager.API.Services
{
    public class ScheduleService
    {
        private readonly CinemaDbContext _context;

        public ScheduleService(CinemaDbContext context)
        {
            _context = context;
        }

        public List<ScheduleItem> GetSchedule()
        {
            return _context.ScheduleItems
                .Include(s => s.Movie)
                .Include(s => s.CinemaHall)
                .ToList();
        }

        public void AddScheduleItem(Guid movieId, Guid cinemaHallId, DateTime startTime)
        {
            if (startTime.Kind != DateTimeKind.Utc)
                startTime = DateTime.SpecifyKind(startTime, DateTimeKind.Utc);
    
            var movie = _context.Movies.FirstOrDefault(m => m.Id == movieId);
            var hall = _context.CinemaHalls.FirstOrDefault(h => h.Id == cinemaHallId);

            if (movie == null || hall == null)
            {
                throw new Exception("Movie or Hall not found");
            }

            var existingItems = _context.ScheduleItems
                .Include(s => s.Movie)
                .Where(s => s.CinemaHall.Id == cinemaHallId)
                .ToList();

            var newStart = startTime;
            var newEnd = startTime.AddMinutes(movie.DurationMinutes);

            foreach (var s in existingItems)
            {
                var existingStart = s.StartTime;
                var existingEnd = s.StartTime.AddMinutes(s.Movie.DurationMinutes);

                if (newStart < existingEnd && existingStart < newEnd)
                {
                    throw new Exception("This hall already has a conflicting schedule item in this time range.");
                }
            }

            var scheduleItem = new ScheduleItem(movie, hall, startTime);
            _context.ScheduleItems.Add(scheduleItem);
            _context.SaveChanges();
        }

    }
}
