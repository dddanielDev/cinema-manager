namespace CinemaManager.API.Models
{
    public class Employee : Person
    {
        public Employee(string firstName, string lastName) : base(firstName, lastName) {}

        public override string GetRole()
        {
            return "Employee";
        }
    }
}
