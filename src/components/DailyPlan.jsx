import { wellnessData } from "../data/welnessData";

export default function DailyPlan({ selectedGoal, selectedTime }) {
    const goalData = wellnessData[selectedGoal];
    const dailyPlan = goalData.plans[selectedTime];

    return (
        <div>
            <h2> Your Daily Plan </h2>

            <h3> Healthy Habits </h3>

            {goalData.habits.map((habit) => (
                <p key={habit}>
                    ✓ {habit}
                </p>

            ))}

            <h3>
                Your {selectedTime === 30 ? "30+" : selectedTime} Minute Plan
            </h3>

            {dailyPlan.map((activity) => (
                <p key={activity}>
                    {activity}
                </p>
            ))}
        </div>

    );

}