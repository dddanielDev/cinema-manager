using System.Security.Claims;
using CinemaManager.API.Models;
using CinemaManager.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CinemaManager.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class AvailableFeaturesController : ControllerBase
{
    [HttpGet]
    public ActionResult Features()
    {
        var role = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Role)?.Value;

        if (role == null)
        {
            return BadRequest("Role claim not found in token");
        }
        EmployeeFeatures employeeFeatures = EmployeeFeaturesService.GetEmployeeFeatures(role);
        
        return Ok(employeeFeatures.GetEnabledFeatures());
    }
}