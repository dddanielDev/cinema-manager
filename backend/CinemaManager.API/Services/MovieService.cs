using CinemaManager.API.Data;
using CinemaManager.API.Models;

namespace CinemaManager.API.Services
{
    public class MovieService
    {
        private readonly CinemaDbContext _context;

        public MovieService(CinemaDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Movie> GetAllMovies()
        {
            return _context.Movies.ToList();
        }

        public Movie AddMovie(string title, string description, int durationMinutes)
        {
            var movie = new Movie(title, description, durationMinutes);
            _context.Movies.Add(movie);
            _context.SaveChanges();
            return movie;
        }
    }
}
