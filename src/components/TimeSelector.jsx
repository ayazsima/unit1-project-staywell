export default function TimeSelector({ selectedTime, setSelectedTime }) {
    const times = [5, 15, 30];
    return (
        <section className="time-section">

            <h2>How much time can you dedicate today?</h2>
            <div className="time-options">
                {times.map((time) => (
                    <button className="time-button"
                        key={time}
                        onClick={() => setSelectedTime(time)} >
                        {time === 30 ? "30+ minutes" : `${time} minutes`}
                    </button>
                ))}

                {selectedTime && (
                    <p>
                        Your selected time:{" "}
                        {selectedTime === 30 ? "30+ minutes" : `${selectedTime} minutes`}
                    </p>
                )}
            </div>
        </section>
    );
}