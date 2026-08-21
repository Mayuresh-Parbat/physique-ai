import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import BodyAnalysis from "./pages/BodyAnalysis";
import WorkoutPlan from "./pages/WorkoutPlan";
import WorkoutTracker from "./pages/WorkoutTracker";
import DietPlan from "./pages/DietPlan";
import Challenges from "./pages/Challenges";

function App() {
  return (
    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      {/* LOGIN */}

      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        }
      />

      {/* REGISTER */}

      <Route
        path="/register"
        element={
          <>
            <Navbar />
            <Register />
            <Footer />
          </>
        }
      />

      {/* DASHBOARD */}

      <Route
        path="/dashboard"
        element={
          <>
            <Dashboard />
            <Footer />
          </>
        }
      />

      {/* BODY ANALYSIS */}

      <Route
        path="/body-analysis"
        element={
          <>
            <BodyAnalysis />
            <Footer />
          </>
        }
      />

      {/* WORKOUT PLAN */}

      <Route
        path="/workout-plan"
        element={
          <>
            <WorkoutPlan />
            <Footer />
          </>
        }
      />

      {/* WORKOUT TRACKER */}

      <Route
        path="/workout-tracker"
        element={
          <>
            <WorkoutTracker />
            <Footer />
          </>
        }
      />

      {/* DIET PLAN */}

      <Route
        path="/diet-plan"
        element={
          <>
            <DietPlan />
            <Footer />
          </>
        }
      />

      {/* CHALLENGES */}

      <Route
        path="/challenges"
        element={
          <>
            <Challenges />
            <Footer />
          </>
        }
      />

    </Routes>
  );
}

export default App;