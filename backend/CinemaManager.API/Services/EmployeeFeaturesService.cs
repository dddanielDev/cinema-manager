using CinemaManager.API.Models;

namespace CinemaManager.API.Services;

public static class EmployeeFeaturesService
{
    public static EmployeeFeatures GetEmployeeFeatures(string role)
    {
        if (role == "manager")
        {
            return new Manager();
        }

        return new RegularEmployee();
    }
}