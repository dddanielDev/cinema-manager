using CinemaManager.API.Data;
using CinemaManager.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CinemaManager.API.Services;

public class AccountsService
{
    private readonly CinemaDbContext _context;

    public AccountsService(CinemaDbContext context)
    {
        _context = context;
    }
    
    public Account GetAccountByPin(int pin)
    {
        var account = _context.Accounts
            .Include(a => a.Employee)
            .FirstOrDefault(a => a.Pin == pin);
        
        return account;
    }
}