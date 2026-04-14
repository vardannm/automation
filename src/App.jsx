import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import DashboardPage from "./components/pages/DashboardPage";
import ProductsPage from "./components/pages/ProductsPage";
import ModalsAlertsPage from "./components/pages/ModalsAlertsPage";
import InteractionsPage from "./components/pages/InteractionsPage";
import UploadDatePage from "./components/pages/UploadDatePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-8">
          <Routes>
            {/* Default route redirects to Login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/modals-alerts" element={<ModalsAlertsPage />} />
            <Route path="/interactions" element={<InteractionsPage />} />
            <Route path="/upload-date" element={<UploadDatePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
