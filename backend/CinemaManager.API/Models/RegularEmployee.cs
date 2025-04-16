namespace CinemaManager.API.Models
{
    public class RegularEmployee : EmployeeFeatures
    {
        public override string[] GetEnabledFeatures()
        {
            return [Features.Movies, Features.CinemaHalls];
        }
    }
}
