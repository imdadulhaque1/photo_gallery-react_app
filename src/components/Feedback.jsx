import React, {useState} from 'react';
import { db } from "../firebase";
import "../App.css";

const Contact = () => {
    const [photoName, setPhotoName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        db.collection('feedbacks').add({
            photoName: photoName,
            email: email,
            feedback: feedback,
        })
        .then(() => {
            alert("Feedback has been submitted 👍")
        })
        .catch((error) =>{
            alert(error.feedback);
        });
        setPhotoName("");
        setEmail("");
        setFeedback("");
    };

    return (
        <div className="feedbacks">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Type Your Feedback 📝</h1>

                <label>Photo Name</label>
                <input type="text" value={photoName} onChange={(e) => setPhotoName(e.target.value)} placeholder="Type the photo name....." />

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your email....." />

                <label>Feedback</label>
                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Type your valuable Feedback....."></textarea>

                <button type="submit">Feedback</button>
            </form>
        </div>
    )
}

export default Contact;
