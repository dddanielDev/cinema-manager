import {
  useGetMoviesQuery,
  useAddMovieMutation,
} from "../features/movies/moviesApi";
import { useState } from "react";

const MoviesPage = () => {
  const { data: movies = [], isLoading, refetch } = useGetMoviesQuery();
  const [addMovie] = useAddMovieMutation();

  const [form, setForm] = useState({
    title: "",
    description: "",
    durationMinutes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMovie({
      ...form,
      durationMinutes: parseInt(form.durationMinutes),
    });
    await refetch();
    setForm({ title: "", description: "", durationMinutes: "" });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Movies 🎥</h1>

      {isLoading ? (
        <p>Loading movies..</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-2xl shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-indigo-700 mb-2">
                {movie.title}
              </h2>
              <p className="text-gray-700 mb-4">{movie.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{movie.durationMinutes} min</span>
                <span>ID: {movie.id.slice(0, 6)}...</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
          Add new movie
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <textarea
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
          />
          <input
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="number"
            name="durationMinutes"
            placeholder="Duration (minutes)"
            value={form.durationMinutes}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-indigo-700 text-white py-3 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default MoviesPage;
