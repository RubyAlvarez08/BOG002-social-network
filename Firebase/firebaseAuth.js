export function Registro(){
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
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
   
}

export function CerrarSesion(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}