import { useGetMoviesQuery } from '../features/movies/moviesApi';
import { useGetHallsQuery } from '../features/halls/hallsApi';
import {
  useGetScheduleQuery,
  useAddScheduleMutation,
} from '../features/schedule/scheduleApi';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SchedulePage = () => {
  const {
    data: schedule = [],
    isLoading: scheduleLoading,
    refetch,
  } = useGetScheduleQuery();
  const { data: movies = [] } = useGetMoviesQuery();
  const { data: halls = [] } = useGetHallsQuery();
  const [addSchedule] = useAddScheduleMutation();

  const [form, setForm] = useState({
    movieId: '',
    cinemaHallId: '',
    startTime: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addSchedule({ ...form }).unwrap();
      await refetch();
      setForm({ movieId: '', cinemaHallId: '', startTime: '' });
      toast.success('Schedule added successfully!');
    } catch (err) {
      toast.error('You can not add movie while last movie is not ended');
    }
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Schedule 📅</h1>

      {/* KAFELKI */}
      {schedule.map(item => (
        <div
          key={item.id}
          className='bg-white rounded-2xl shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg'
        >
          <h2 className='text-xl font-bold text-indigo-700 mb-2'>
            {item.movie ? item.movie.title : 'Unknown movie'}
          </h2>
          <p className='text-gray-700 mb-2'>
            Hall: {item.cinemaHall ? item.cinemaHall.name : 'Unknown hall'}
          </p>
          <p className='text-gray-500 text-sm'>
            Starts:{' '}
            {item.startTime
              ? item.startTime.replace('T', ' ').substring(0, 16)
              : 'N/A'}
          </p>
        </div>
      ))}

      {/* FORMULARZ */}
      <div className='bg-white shadow-lg rounded-2xl p-6'>
        <h2 className='text-2xl font-semibold mb-4 text-indigo-700'>
          Add new schedule item
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <select
            name='movieId'
            value={form.movieId}
            onChange={handleChange}
            required
            className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            <option value=''>Select movie</option>
            {movies.map(movie => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </select>
          <select
            name='cinemaHallId'
            value={form.hallId}
            onChange={handleChange}
            required
            className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            <option value=''>Select hall</option>
            {halls.map(hall => (
              <option key={hall.id} value={hall.id}>
                {hall.name}
              </option>
            ))}
          </select>
          <input
            type='datetime-local'
            name='startTime'
            value={form.startTime}
            onChange={handleChange}
            required
            className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <button
            type='submit'
            className='bg-indigo-700 text-white py-3 px-4 rounded-lg hover:bg-indigo-600 transition'
          >
            Add Schedule
          </button>
        </form>
      </div>
    </div>
  );
};

export default SchedulePage;
