import "./App.css"
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import SavedPlans from "./components/SavedPlans";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { wellnessData } from "./data/wellnessData";

function App() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [savedPlan, setSavedPlan] = useState(null);
  const navigate = useNavigate();

  // Reset the time and saved plan when a new goal is selected
  function handleGoalSelect(goal) {
    setSelectedGoal(goal);
    setSelectedTime("");
    setSavedPlan(null);
  }
  // Remove the saved plan
  function handleRemoveSavedPlan() {
    setSavedPlan(null);
  }
  // Save the plan based on the selected goal and time
  function handleSavePlan() {
    const goalData = wellnessData[selectedGoal];
    const plan = {
      goal: selectedGoal,
      time: selectedTime,
      habits: goalData.habits,
      activities: goalData.plans[selectedTime],
      supplements: goalData.supplements
    };
    setSavedPlan(plan);
    navigate("/saved-plan");
  }
  return (
    <>
      <Header />

      <main className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedGoal={selectedGoal}
                selectedTime={selectedTime}
                handleGoalSelect={handleGoalSelect}
                setSelectedTime={setSelectedTime}
                handleSavePlan={handleSavePlan}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/saved-plan"
            element={
              savedPlan ? (
                <SavedPlans
                  savedPlan={savedPlan}
                  handleRemoveSavedPlan={handleRemoveSavedPlan}
                />
              ) : (
                <p id="no-saved-plan">No saved plan yet.</p>
              )
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;
