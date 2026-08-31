import GoalSelector from "./GoalSelector";
import TimeSelector from "./TimeSelector";
import DailyPlan from "./DailyPlan";
import "./Home.css"

export default function Home({
    selectedGoal,
    selectedTime,
    handleGoalSelect,
    setSelectedTime,
    handleSavePlan
}) {
    return (
        <>
            <section className="home-intro">
                <div className="home-text">
                    <h2>Build a healthier day with StayWell</h2>

                    <p>
                        Choose your wellness goal and available time to create a personalized daily plan.
                    </p>
                </div>
                <img
                    src="/home.png"
                    alt="Plant, water bottle, and lemon water representing a healthy lifestyle"
                    className="home-image"
                />
            </section>

            <GoalSelector
                selectedGoal={selectedGoal}
                setSelectedGoal={handleGoalSelect}
            />

            {selectedGoal && (
                <TimeSelector
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                />
            )}

            {selectedGoal && selectedTime && (
                <DailyPlan
                    selectedGoal={selectedGoal}
                    selectedTime={selectedTime}
                    handleSavePlan={handleSavePlan}
                />
            )}
        </>
    );
}