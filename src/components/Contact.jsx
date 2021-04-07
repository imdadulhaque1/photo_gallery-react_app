import React from 'react';
import "../App.css";

const Contact = () => {
    return (
        <div className="contact">
            <form className="form">
                <h1>Contact Me 📧</h1>

                <label>Name</label>
                <input type="text" placeholder="Type your name....." />

                <label>Phone</label>
                <input type="number" placeholder="Type your phone number....." />

                <label>Email</label>
                <input type="email" placeholder="Type your email....." />

                <label>Messages</label>
                <textarea placeholder="Type your valuable Feedback....."></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
