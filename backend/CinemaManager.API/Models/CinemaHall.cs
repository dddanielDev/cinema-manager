namespace CinemaManager.API.Models
{
    public class CinemaHall : BaseEntity
    {
        public string Name { get; private set; }
        public int Capacity { get; private set; }

        private CinemaHall() { }

        public CinemaHall(string name, int capacity)
        {
            Name = name;
            Capacity = capacity;
        }
    }
}
