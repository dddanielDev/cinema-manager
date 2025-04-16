using CinemaManager.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace CinemaManager.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LoginController : ControllerBase
{
    private readonly AccountsService _accountsService;
    private readonly JwtService _jwtService;

    public LoginController(AccountsService accountsService, JwtService jwtService)
    {
        _accountsService = accountsService;
        _jwtService = jwtService;
    }

    [HttpGet]
    public ActionResult Login([FromQuery] int pin)
    {
        var account = _accountsService.GetAccountByPin(pin);
        if (account == null)
        {
            return NotFound("Account not found");
        }
        
        var token = _jwtService.GenerateToken(account);
        
        return Ok(new {bearer = token});
    }
}