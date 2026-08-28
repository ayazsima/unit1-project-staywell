import GoalSelector from "./GoalSelector";
import TimeSelector from "./TimeSelector";
import DailyPlan from "./DailyPlan";

export default function Home({
    selectedGoal,
    selectedTime,
    handleGoalSelect,
    setSelectedTime,
    handleSavePlan
}) {
    return (
        <>
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