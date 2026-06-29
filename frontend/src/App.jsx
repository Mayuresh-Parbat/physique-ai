import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import WorkoutTracker from "./pages/WorkoutTracker";
import DietPlan from "./pages/DietPlan";
import WorkoutPlan from "./pages/WorkoutPlan";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Challenges from "./pages/Challenges";
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
  path="/workout-tracker"
  element={<WorkoutTracker />}
/>
<Route
  path="/workout-plan"
  element={<WorkoutPlan />}
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



<Route
  path="/challenges"
  element={<Challenges />}
/>


      {/* DASHBOARD PAGES */}

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/body-analysis" element={<BodyAnalysis />} />

    </Routes>
  );
}

export default App;