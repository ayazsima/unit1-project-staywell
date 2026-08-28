import "./DailyPlan.css";
export default function SavedPlans({ savedPlan }) {
    return (
        <div className="daily-plan">
            <h2>Your Saved Plan</h2>

            <h3>
                {savedPlan.goal} - {savedPlan.time} minutes
            </h3>

            <div className="plan-columns">

                <div className="habits-section">
                    <h3>Healthy Habits</h3>

                    <div className="habit-list">
                        {savedPlan.habits.map((habit) => (
                            <p key={habit}>☀️ {habit}</p>
                        ))}
                    </div>
                </div>

                <div className="activities-section">
                    <h3>Your Plan</h3>

                    <div className="activity-list">
                        {savedPlan.activities.map((activity) => (
                            <p key={activity}>⚡ {activity}</p>
                        ))}
                    </div>
                </div>

                <div className="supplements-section">
                    <h3>Supplements</h3>

                    {savedPlan.supplements.map((supplement) => (
                        <div className="supplements" key={supplement.name}>
                            <p>🌿 <strong>{supplement.name}</strong></p>
                            <p>{supplement.purpose}</p>
                            <p><strong>Tip:</strong> {supplement.tip}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}