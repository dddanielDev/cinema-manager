namespace CinemaManager.API.Models
{
    public class Movie : BaseEntity
    {
        public string Title { get; private set; }
        public string Description { get; private set; }
        public int DurationMinutes { get; private set; }

        private Movie() { }

        public Movie(string title, string description, int durationMinutes)
        {
            Title = title;
            Description = description;
            DurationMinutes = durationMinutes;
        }
    }
}
