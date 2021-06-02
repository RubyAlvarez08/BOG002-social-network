import { crearUsuario, Login, withGoogle } from "../../Firebase/firebaseAuth.js";
const googleButton = document.getElementById('google');

/* *********************Crear cuenta********************* */
export function RegistroUsuario(){
    const formularioSignUp = document.getElementById('formulario-sign-up');
    formularioSignUp.addEventListener('submit', (e)=>{
       e.preventDefault();
      // Obtener la info del usuario
       const email = document.getElementById('EmailUser').value;
       const password = document.getElementById('PasswordUser').value;
       
       //conectando con firebase... Consumiedo la promesa
       crearUsuario(email,password)
       .then((cred) => {
        
        console.log(cred);
        window.location.hash = '#/timeline'
        
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
         
         //conectando firebase
         Login(email,password)
         .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location.hash = '#/timeline'
          
        })
        .catch((error) => {
            modalErrorLogin(error);
        });
      })    
  }

 /* ********************Ingresar con Google***************** */
/*  googleButton.addEventListener('click',withGoogle); */

export function Google(){

  const BotonGoogle = document.getElementById('google');
  BotonGoogle.addEventListener('click',loginGoogle);

  function loginGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
 
     withGoogle(provider)
    .then((result) => {
      let credential = result.credential;
      let user = result.user;
      console.log(user)
    
      window.location.hash ='#/timeline';
    
      
    }).catch((error) => {
       console.log(error)
    });
  
  }
 
  
} 
     
export function CerrarSesion()	{
	let BotonCerrar = document.getElementById('cerrar-sesion');
		BotonCerrar.addEventListener('click', Salir);

    function Salir(){
      firebase.auth().signOut()
      .then(() => {
          confirm('Desea salir?')
          if(confirm == 'Aceptar'){
            window.location.hash = ''
          }else{
            window.location.hash = '#/timeline';
          }
        }).catch(() => {
          
        });
  }
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

//  obtener valores
export function FormularioPublicacion() {
	const botonAbrirModal = document.getElementById('abrir-modal');
	const modalPublicacion = document.getElementById('post_modal');
	const cerrarModal = document.getElementById('publicar-btn');
	const cerrarSinPublicar = document.getElementById('cerrar');
	botonAbrirModal.addEventListener('click', () => {
		modalPublicacion.classList.add('show');
	})
	cerrarModal.addEventListener('click', () => {
		modalPublicacion.classList.remove('show');
	})
    cerrarSinPublicar.addEventListener('click', () => {
		modalPublicacion.classList.remove('show');
	})

	
}