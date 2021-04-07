import React from 'react'
import { db, auth } from '../firebase';
import "../App.css";

class FirebaseData extends React.Component{
    state = {
        feedbacks: null,
    }
    componentDidMount(){
        db.collection('feedbacks')
            .get()
            .then(snapshot =>{
                const feedbacks = [];
                snapshot.forEach(doc =>{
                    const data = doc.data();
                    feedbacks.push(data);
                })
                this.setState({ feedbacks: feedbacks })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="firebasedata">
                <h1><u><b>User Feedbacks</b></u></h1>
                {
                    this.state.feedbacks && 
                    this.state.feedbacks.map(feedback =>{
                        return(
                            <div>
                                <br/>
                                <p> Photo Name: {feedback.photoName} </p>
                                <p> User Email: {feedback.email} </p>
                                <p> Feedback: {feedback.feedback} </p>
                                <hr/><hr/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
}

export default FirebaseData;
