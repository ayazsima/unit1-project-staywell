import { wellnessData } from "../data/wellnessData";

export default function Supplement({ selectedGoal }) {
    const supplements = wellnessData[selectedGoal].supplements;

    return (
        <div className="supplement-section">
            <h2>Suggested supplements</h2>

            {supplements.map((supplement) =>
                <div key={supplement.name}>
                    <p>{supplement.name}</p>
                    <p>{supplement.purpose}</p>
                    <p><strong>{supplement.tip}</strong></p>
                </div>
            )}
        </div>
    );
}