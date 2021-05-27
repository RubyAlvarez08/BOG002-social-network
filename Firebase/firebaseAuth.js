
import { modalError } from '../src/Pages/error.js';

export function Registro(email,password,name){
    firebase
    .auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      
    window.location.hash = '#/timeline'
    var user = userCredential.user.displayname;
    console.log(user)
    // ...
  })
  .catch((error) => {
    modalError(error)
  });
}

/* ************Ingresar con Email y password*************** */
export function Ingreso(){
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

/* ********************Ingresar con Google***************** */
export function withGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
  .then((result) => {
  
    window.location.hash ='#/release';
  
    var credential = result.credential;
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

export function CerrarSesion(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}