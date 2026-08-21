export default function GoalSelector({ selectedGoal, setSelectedGoal }) {
    const goals = [
        "Boost Energy",
        "Sleep Better",
        "Reduce Stress",
        "Build Strength",
        "Improve Digestion"
    ];
    return (
        <div>
            <h2>What would you improve today?</h2>
            <p>Choose one wellness goal.</p>

            {goals.map((goal) => (
                <button key={goal}
                    onClick={() => setSelectedGoal(goal)}> {goal} </button>
            ))}
            {selectedGoal && (
                <p>You selected: {selectedGoal}</p>
            )}
        </div>
    );
}