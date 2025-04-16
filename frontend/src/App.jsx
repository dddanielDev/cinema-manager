import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import CinemaHallsPage from "./pages/CinemaHallsPage";
import SchedulePage from "./pages/SchedulePage";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.login?.bearer);
  console.log("Token from Redux:", token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page - separate from Layout */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected routes with Layout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <MoviesPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cinemahalls"
          element={
            <ProtectedRoute>
              <Layout>
                <CinemaHallsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <Layout>
                <SchedulePage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Catch-all route to redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
