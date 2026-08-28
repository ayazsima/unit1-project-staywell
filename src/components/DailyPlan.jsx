import { wellnessData } from "../data/wellnessData";
import Button from "./Button";
import "./DailyPlan.css";

export default function DailyPlan({ selectedGoal, selectedTime, handleSavePlan }) {
    const goalData = wellnessData[selectedGoal];
    const dailyPlan = goalData.plans[selectedTime];

    return (
        <div className="daily-plan">
            <h2> Your Daily Plan </h2>

            <div className="plan-columns">
                <div className="habits-section">
                    <h3>Healthy Habits</h3>

                    <ul className="habit-list">
                        {goalData.habits.map((habit) => (
                            <li key={habit}>
                                ☀️ {habit}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="activities-section">
                    <h3>
                        Your {selectedTime === 30 ? "30+" : selectedTime} Minute Plan
                    </h3>
                    <div className="activity-list">
                        {dailyPlan.map((activity) => (
                            <p key={activity}>
                                ⚡ {activity}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="supplements-section">
                    <h3>Supplements</h3>

                    {goalData.supplements.map((supplement) => (
                        <div className="supplements" key={supplement.name}>
                            <h4>🌿 {supplement.name}</h4>
                            <p>{supplement.purpose}</p>
                            <p><strong>Tip: </strong>{supplement.tip}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Button
                text="Save This Plan"
                onClick={handleSavePlan} />
        </div>

    );

}