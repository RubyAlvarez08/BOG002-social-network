

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
        modalErrorSignUp(error)
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

/* *******POPUP  Error Loguin ********* */
 function modalErrorLogin(error) { 
    
    const login_modal = document.getElementById('login_modal');
    const close = document.getElementById('close-login');
    
    if ( error.code=="auth/user-not-found" || "auth/wrong-password") {
        login_modal.classList.add('show'); 
    }
    
    close.addEventListener('click', () => {
      login_modal.classList.remove('show');
    });
}
/* *******POPUP  Error Registro ********* */
function modalErrorSignUp(error){
    const container_modal = document.getElementById('container_modal');
const close = document.getElementById('close');

if ( error.code=="auth/email-already-in-use") {
    container_modal.classList.add('show'); 
}

close.addEventListener('click', () => {
    container_modal.classList.remove('show');
});
}