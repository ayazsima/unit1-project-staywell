export default function GoalSelector({ selectedGoal, setSelectedGoal }) {
    const goals = [
        "Boost Energy",
        "Sleep Better",
        "Reduce Stress",
        "Build Strength",
        "Improve Digestion"
    ];
    return (
        <section className="goal-section">
            <h2>What would you improve today?</h2>
            <p>Choose one wellness goal.</p>

            <div className="goal-options">
                {goals.map((goal) => (
                    <button className="goal-button"
                        key={goal}
                        onClick={() => setSelectedGoal(goal)}> {goal} </button>
                ))}
                {selectedGoal && (
                    <p>You selected: {selectedGoal}</p>
                )}
            </div>
        </section>
    );
}