import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import CinemaHallsPage from './pages/CinemaHallsPage';
import SchedulePage from './pages/SchedulePage';
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<MoviesPage />} />
          <Route path='/cinemahalls' element={<CinemaHallsPage />} />
          <Route path='/schedule' element={<SchedulePage />} />
        </Routes>
        <ToastContainer position='top-right' autoClose={3000} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
