using CinemaManager.API.Authorization;
using Microsoft.AspNetCore.Mvc;
using CinemaManager.API.Services;
using CinemaManager.API.Models;
using Microsoft.AspNetCore.Authorization;

namespace CinemaManager.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    [RequireFeature(Features.Movies)]
    public class MoviesController : ControllerBase
    {
        private readonly MovieService _movieService;

        public MoviesController(MovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Movie>> GetMovies()
        {
            var movies = _movieService.GetAllMovies();
            return Ok(movies);
        }

        [HttpPost]
        public ActionResult<Movie> AddMovie([FromBody] MovieDto dto)
        {
            var movie = _movieService.AddMovie(dto.Title, dto.Description, dto.DurationMinutes);
            return Ok(movie);
        }
    }

    public class MovieDto
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int DurationMinutes { get; set; }
}

}
