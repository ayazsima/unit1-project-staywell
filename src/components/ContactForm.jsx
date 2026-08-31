import { useState } from "react";
import Button from "./Button";
import "./ContactForm.css";


export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");
    const [messageStatus, setMessageStatus] = useState("");

    // Check the form fields before submitting
    function handleSubmit(event) {
        event.preventDefault();

        if (!name) {
            setMessageStatus("Please enter your name.");
            return;
        }

        if (!email) {
            setMessageStatus("Please enter your email.");
            return;
        }

        if (!topic) {
            setMessageStatus("Please select a topic.");
            return;
        }

        if (!message) {
            setMessageStatus("Please enter a message.");
            return;
        }

        setMessageStatus("Your request has been submitted.");

        setName("");
        setEmail("");
        setTopic("");
        setMessage("");
    }
    return (
        <div className="contact-form">
            <h3>Get Support</h3>
            <p>Need more help with your wellness journey? Send us a message.</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)} /> <br /><br />
                </label>

                <label>
                    Email
                    <input type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} /><br /><br />
                </label>

                <label>
                    What do you need help with? <br />
                    <select
                        value={topic}
                        onChange={(event) => setTopic(event.target.value)}>
                        <option value="">Select a topic</option>
                        <option value="sleep">Sleep Better</option>
                        <option value="stress">Reduce Stress</option>
                        <option value="energy">Boost Energy</option>
                        <option value="strength">Build Strength</option>
                        <option value="digestion">Improve Digestion</option>
                    </select>
                </label><br /><br />

                <label>
                    Message <br />
                    <textarea
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        maxLength={500} />
                </label><br />

                {messageStatus && <p>{messageStatus}</p>}

                <Button
                    text="Send Request"
                    type="submit" />
            </form>
        </div>
    );
}