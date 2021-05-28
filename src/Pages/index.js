import {modalError,modalErrorLogin } from './error.js';

/* *********************Crear cuenta********************* */
export async function RegistroUsuario(){
    const formularioSignUp = document.getElementById('formulario-sign-up');
    formularioSignUp.addEventListener('submit', (e)=>{
       e.preventDefault();
      // Obtener la info del usuario
       const email = document.getElementById('EmailUser').value;
       const password = document.getElementById('PasswordUser').value;
       
       //conectando con firebase
       firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((cred) => {
        
       console.log(cred);
       window.location.hash = '#/timeline'
       formularioSignUp.reset();
    })
       .catch((error) => {
       modalError(error)
   });
 
    })
 }
 /* ********************login de usuario******************** */
 export function DatosDeLogin(){
    const formularioLogin = document.getElementById('Form-login');
      formularioLogin.addEventListener('submit', (e)=>{
         e.preventDefault();
        // Obtener la info del usuario
         const email = document.getElementById('EmailUser').value;
         const password = document.getElementById('PasswordUser').value;
         
         firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location.hash = '#/timeline'
            formularioLogin.reset();
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            modalErrorLogin(error);
        });
      })    
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