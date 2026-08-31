import "./GoalSelector.css";

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
            <div className="goal-options">
                {/* Create a button for each goal */}
                {goals.map((goal) => (
                    <button
                        className={selectedGoal === goal ? "goal-button selected" : "goal-button"}
                        key={goal}
                        onClick={() => setSelectedGoal(goal)}>
                        {goal}
                    </button>
                ))}
            </div>
        </section>
    );
}