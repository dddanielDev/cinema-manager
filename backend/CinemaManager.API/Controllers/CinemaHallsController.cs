using Microsoft.AspNetCore.Mvc;
using CinemaManager.API.Services;
using CinemaManager.API.Models;

namespace CinemaManager.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CinemaHallsController : ControllerBase
    {
        private readonly CinemaHallService _hallService;

        public CinemaHallsController(CinemaHallService hallService)
        {
            _hallService = hallService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CinemaHall>> GetHalls()
        {
            var halls = _hallService.GetAllHalls();
            return Ok(halls);
        }

        [HttpPost]
        public ActionResult<CinemaHall> AddHall([FromBody] CinemaHallDto dto)
        {
            var hall = _hallService.AddHall(dto.Name, dto.Capacity);
            return Ok(hall);
        }
    }

   public class CinemaHallDto
{
    public string? Name { get; set; }
    public int Capacity { get; set; }
}

}
