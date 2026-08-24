import "./App.css"
import { useState } from "react";
import GoalSelector from "./components/GoalSelector";
import TimeSelector from "./components/TimeSelector";
import DailyPlan from "./components/DailyPlan";


function App() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  function handleGoalSelect(goal) {
    setSelectedGoal(goal);
    setSelectedTime("");
  }

  return (
    <div>
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
        />
      )}
    </div>
  )
}

export default App;
