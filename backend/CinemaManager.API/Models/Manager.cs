namespace CinemaManager.API.Models
{
    public class Manager : Person
    {
        public Manager(string firstName, string lastName) : base(firstName, lastName) {}

        public override string GetRole()
        {
            return "Manager";
        }
    }
}
