namespace CinemaManager.API.Models
{
    public abstract class Person : BaseEntity
    {
        public string FirstName { get; private set; }
        public string LastName { get; private set; }

        public Person(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        public abstract string GetRole();
    }
}
