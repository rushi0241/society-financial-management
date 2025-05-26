import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FamilyListPage from "./pages/FamilyListPage";
import MaintenancePage from "./pages/MaintenancePage";
import ProtectedRoute from "./ProtectedRoute";
// import NotFoundPage from "./pages/NotFoundPage";
import ReminderPage from "./pages/ReminderPage";
import Dashboard from "./components/dashboard/Dashboard";
import DefaultersPage from "./pages/DefaultersPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/families"
        element={
          <ProtectedRoute>
            <FamilyListPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/maintenance"
        element={
          <ProtectedRoute>
            <MaintenancePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/defaulters"
        element={
          <ProtectedRoute>
            <DefaultersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reminders"
        element={
          <ProtectedRoute>
            <ReminderPage />
          </ProtectedRoute>
        }
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
