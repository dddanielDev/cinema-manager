using Microsoft.AspNetCore.Mvc;
using CinemaManager.API.Services;
using CinemaManager.API.Models;

namespace CinemaManager.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScheduleController : ControllerBase
    {
        private readonly ScheduleService _scheduleService;

        public ScheduleController(ScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }

        [HttpGet]
        public IActionResult GetSchedule()
{
    var schedule = _scheduleService.GetSchedule();
    return Ok(schedule);
}


        [HttpPost]
        public IActionResult AddSchedule([FromBody] ScheduleDto dto)
        {
            try
            {
                _scheduleService.AddScheduleItem(dto.MovieId, dto.CinemaHallId, dto.StartTime);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(new { message = ex.Message });
            }
        }

    }

    public class ScheduleDto
{
    public Guid MovieId { get; set; }
    public Guid CinemaHallId { get; set; } 
    public DateTime StartTime { get; set; }
}
}
