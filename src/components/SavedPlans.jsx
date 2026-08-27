export default function SavedPlans({ savedItems }) {
    return (
        <div>
            <h2>Your Saved Plans</h2>

            {savedItems.map((item, index) => (
                <div key={index}>
                    <h3>{item.goal} - {item.time} minutes</h3>

                    <h4 id="saved-plan">Healthy Habits</h4>
                    {item.habits.map((habit) => (
                        <p key={habit}>☀️ {habit}</p>
                    ))}

                    <h4>Your Plan</h4>
                    {item.activities.map((activity) => (
                        <p key={activity}>⚡ {activity}</p>
                    ))}

                    <h4>Supplements</h4>
                    {item.supplements.map((supplement) => (
                        <div key={supplement.name}>
                            <p><strong>🌿 {supplement.name}</strong></p>
                            <p>{supplement.purpose}</p>
                            <p>{supplement.tip}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}