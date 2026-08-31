import "./TimeSelector.css";

export default function TimeSelector({ selectedTime, setSelectedTime }) {
    const times = [5, 15, 30];
    return (
        <section className="time-section">

            <h2>How much time can you dedicate today?</h2>
            <div className="time-options">
                {/* Create a button for each time option */}
                {times.map((time) => (
                    <button
                        className={selectedTime === time ? "time-button selected" : "time-button"}
                        key={time}
                        onClick={() => setSelectedTime(time)} >
                        {time === 30 ? "30+ minutes" : `${time} minutes`}
                    </button>
                ))}
            </div>
        </section>
    );
}