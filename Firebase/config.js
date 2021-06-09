

 export default function inicializeFirebase() {
     // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDEMHDWjIiTFAFK36Re4DAX57db9roWm_k",
    authDomain: "foodfans2-0.firebaseapp.com",
    projectId: "foodfans2-0",
    storageBucket: "foodfans2-0.appspot.com",
    messagingSenderId: "508378501086",
    appId: "1:508378501086:web:9f859b89dd9300b475974f",
    measurementId: "G-HRSB6Y8G07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 /*  firebase.auth.Auth.Persistence.LOCAL */
  firebase.auth();
  let db = firebase.firestore();
  firebase.storage();
  
 }
  