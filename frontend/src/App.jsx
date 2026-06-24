import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import DietPlan from "./pages/DietPlan";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BodyAnalysis from "./pages/BodyAnalysis";

function App() {
  return (
    <Routes>

      {/* PUBLIC PAGES */}

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
          </>
        }
      />
<Route
  path="/diet-plan"
  element={<DietPlan />}
/>
      <Route
        path="/register"
        element={
          <>
            <Navbar />
            <Register />
          </>
        }
      />

      {/* DASHBOARD PAGES */}

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/body-analysis" element={<BodyAnalysis />} />

    </Routes>
  );
}

export default App;