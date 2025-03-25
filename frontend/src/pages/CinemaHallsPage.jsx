import {
  useGetHallsQuery,
  useAddHallMutation,
} from '../features/halls/hallsApi';
import { useState } from 'react';

const CinemaHallsPage = () => {
  const { data: halls = [], isLoading, refetch } = useGetHallsQuery();
  const [addHall] = useAddHallMutation();

  const [form, setForm] = useState({
    name: '',
    capacity: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addHall({ ...form, capacity: parseInt(form.capacity) });
    await refetch();
    setForm({ name: '', capacity: '' });
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Cinema Halls 🎟️</h1>

      {isLoading ? (
        <p>Loading halls...</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-12'>
          {halls.map(hall => (
            <div
              key={hall.id}
              className='bg-white rounded-2xl shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg'
            >
              <h2 className='text-xl font-bold text-indigo-700 mb-2'>
                {hall.name}
              </h2>
              <p className='text-gray-700'>Capacity: {hall.capacity}</p>
              <p className='text-sm text-gray-500 mt-2'>
                ID: {hall.id.slice(0, 6)}...
              </p>
            </div>
          ))}
        </div>
      )}

      <div className='bg-white shadow-lg rounded-2xl p-6'>
        <h2 className='text-2xl font-semibold mb-4 text-indigo-700'>
          Add new hall
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            type='text'
            name='name'
            placeholder='Hall name'
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className='p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            type='number'
            name='capacity'
            placeholder='Capacity'
            value={form.capacity}
            onChange={handleChange}
            required
          />
          <button
            type='submit'
            className='bg-indigo-700 text-white py-3 px-4 rounded-lg hover:bg-indigo-600 transition'
          >
            Add Hall
          </button>
        </form>
      </div>
    </div>
  );
};

export default CinemaHallsPage;
