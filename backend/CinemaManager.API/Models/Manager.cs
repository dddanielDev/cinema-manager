namespace CinemaManager.API.Models
{
    public class Manager : EmployeeFeatures
    {
        public override string[] GetEnabledFeatures()
        {
            return [Features.Movies, Features.Schedules, Features.CinemaHalls];
        }
    }
}
