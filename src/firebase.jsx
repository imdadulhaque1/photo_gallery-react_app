import firebase from 'firebase';
import 'firebase/auth';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaJP3RF-R4I565FP2lm-Laa6Md8ya6e-o",
    authDomain: "photo-gallery-b8c75.firebaseapp.com",
    projectId: "photo-gallery-b8c75",
    storageBucket: "photo-gallery-b8c75.appspot.com",
    messagingSenderId: "263590850830",
    appId: "1:263590850830:web:cede24a3d392c2cf1fa75f",
});

export let db = firebaseApp.firestore();
export let auth =firebase.auth();

export default firebase;