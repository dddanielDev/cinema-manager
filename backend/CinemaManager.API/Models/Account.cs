namespace CinemaManager.API.Models;

public class Account : BaseEntity
{
    public int Pin { get; set; }
    
    public Guid EmployeeId { get; set; }
    public Employee Employee { get; set; }
}