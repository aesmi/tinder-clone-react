import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqicqUsKMJG3E3pZesBsCF7l3dw4G4ZKE",
    authDomain: "tinder-clone-66aa2.firebaseapp.com",
    databaseURL: "https://tinder-clone-66aa2.firebaseio.com",
    projectId: "tinder-clone-66aa2",
    storageBucket: "tinder-clone-66aa2.appspot.com",
    messagingSenderId: "80061776563",
    appId: "1:80061776563:web:87a1a445bbf3e2706da6c6",
    measurementId: "G-T2GN417CRD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
