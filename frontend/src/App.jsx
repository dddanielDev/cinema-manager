import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import CinemaHallsPage from "./pages/CinemaHallsPage";
import SchedulePage from "./pages/SchedulePage";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import { useGetAvailableFeaturesQuery } from "./features/availableFeatures/availableFeaturesApi";

const ProtectedRoute = ({ children, featureName }) => {
  const token = useSelector((state) => state.login?.bearer);

  const { data: availableFeatures } = useGetAvailableFeaturesQuery(undefined, {
    skip: !token,
    refetchOnMountOrArgChange: false,
  });

  const isMissingFeature =
    Boolean(availableFeatures?.length) &&
    !availableFeatures.includes(featureName);

  if (!token || isMissingFeature) {
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
            <ProtectedRoute featureName="Movies">
              <Layout>
                <MoviesPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cinemahalls"
          element={
            <ProtectedRoute featureName="CinemaHalls">
              <Layout>
                <CinemaHallsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <ProtectedRoute featureName="Schedules">
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
