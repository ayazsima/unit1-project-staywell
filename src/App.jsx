import "./App.css"
import { useState } from "react";
import GoalSelector from "./components/GoalSelector";
import TimeSelector from "./components/TimeSelector";
import DailyPlan from "./components/DailyPlan";
import SavedPlans from "./components/SavedPlans";
import { wellnessData } from "./data/wellnessData";

function App() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [savedItems, setSavedItems] = useState([]);

  function handleGoalSelect(goal) {
    setSelectedGoal(goal);
    setSelectedTime("");
  }

  function handleSavePlan() {
    const goalData = wellnessData[selectedGoal];

    const plan = {
      goal: selectedGoal,
      time: selectedTime,
      habits: goalData.habits,
      activities: goalData.plans[selectedTime],
      supplements: goalData.supplements
    };

    setSavedItems([...savedItems, plan]);
  }
  return (
    <div className="app-container">
      <h1>StayWell</h1>

      <GoalSelector
        selectedGoal={selectedGoal}
        setSelectedGoal={handleGoalSelect} />

      {selectedGoal &&
        <TimeSelector
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime} />
      }
      {selectedGoal && selectedTime && (
        <DailyPlan
          selectedGoal={selectedGoal}
          selectedTime={selectedTime}
          handleSavePlan={handleSavePlan}
        />
      )}
      {savedItems.length > 0 && (
        <SavedPlans savedItems={savedItems} />
      )}
    </div>
  )
}

export default App;
