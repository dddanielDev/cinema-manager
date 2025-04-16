namespace CinemaManager.API.Models
{
    public class Employee : BaseEntity
    {
        public string name { get; set; }
        public string role { get; set; }
        
        public Account Account { get; set; }
    }
}
