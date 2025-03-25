namespace CinemaManager.API.Models
{
    public class ScheduleItem : BaseEntity
    {
        public Movie Movie { get; private set; }
        public CinemaHall CinemaHall { get; private set; }
        public DateTime StartTime { get; private set; }

        private ScheduleItem() { }

        public ScheduleItem(Movie movie, CinemaHall cinemaHall, DateTime startTime)
        {
            Movie = movie;
            CinemaHall = cinemaHall;
            StartTime = startTime;
        }
    }
}
