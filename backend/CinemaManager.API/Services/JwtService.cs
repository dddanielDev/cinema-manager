using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CinemaManager.API.Models;
using Microsoft.IdentityModel.Tokens;

namespace CinemaManager.API.Services;

public class JwtService
{
    private readonly IConfiguration _configuration;

    public JwtService(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    
    public string GenerateToken(Account account)
    {
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
            _configuration["Jwt:Key"] ?? "YourSuperSecretKeyHereShouldBeAtLeast32Chars"));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
        
        var claims = new[]
        {
            new Claim("role", account.Employee.role),
            new Claim("id", account.Id.ToString()),
            new Claim("name", account.Employee.name),
        };
        
        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"] ?? "cinema-manager-api",
            audience: _configuration["Jwt:Audience"] ?? "cinema-manager-clients",
            claims: claims,
            expires: DateTime.Now.AddMonths(1),
            signingCredentials: credentials);
        
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}