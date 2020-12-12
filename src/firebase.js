import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDpR5KaADvrsAaKiO7Jd4g909ZG0V7sg6o",
    authDomain: "e-challenge2.firebaseapp.com",
    databaseURL: "https://e-challenge2.firebaseio.com",
    projectId: "e-challenge2",
    storageBucket: "e-challenge2.appspot.com",
    messagingSenderId: "642775862775",
    appId: "1:642775862775:web:b793bdce2dd0b9c5cab2f2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db , auth}; 
