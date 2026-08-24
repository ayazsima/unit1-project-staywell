import { wellnessData } from "../data/wellnessData";

export default function DailyPlan({ selectedGoal, selectedTime }) {
    const goalData = wellnessData[selectedGoal];
    const dailyPlan = goalData.plans[selectedTime];

    return (
        <div className="daily-plan">
            <h2> Your Daily Plan </h2>

            <div className="habits-section">
                <h3>Healthy Habits</h3>

                <ul className="habit-list">
                    {goalData.habits.map((habit) => (
                        <li key={habit}>
                            ✓ {habit}
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
                            {activity}
                        </p>
                    ))}
                </div>
            </div>
        </div>

    );

}