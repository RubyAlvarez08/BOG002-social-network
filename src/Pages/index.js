import { CerrarLaSesion, crearUsuario, estadoDeAutenticacion, Login,  withGoogle } from "../../Firebase/firebaseAuth.js";
import {GuardarPost, leerPost} from '../../Firebase/firestore.js';


/* *********************Crear cuenta********************* */
export function RegistroUsuario(){
    const formularioSignUp = document.getElementById('formulario-sign-up');
    formularioSignUp.addEventListener('submit',(e)=>{
       e.preventDefault();
      // Obtener la info del usuario
      const name = document.getElementById('NameUser').value;
       const email = document.getElementById('EmailUser').value;
       const password = document.getElementById('PasswordUser').value;

        crearUsuario(email,password)
        .then((userCredential) => {
          // Signed in
          window.location.hash = '#/timeline';
          var user = userCredential.user;
          // ...
        })
        .catch((error)=>{
        modalErrorSignUp(error)
       })   
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
            let user = userCredential.user;
            window.location.hash = '#/timeline';
          
        })
        .catch((error) => {
            modalErrorLogin(error);
        });
      })    
  }

 /* ********************Ingresar con Google***************** */
export function Google(){

  const BotonGoogle = document.getElementById('google');
  BotonGoogle.addEventListener('click',async()=>{
    try{
      let provider = new firebase.auth.GoogleAuthProvider();
      let result = await withGoogle(provider);
      let token = result.credential.accessToken;
      let user = result.user;
      console.log(token)
      window.location.hash ='#/timeline';
    }catch(error){
      console.log(error)
   }

  })
}
 
   
export function CerrarSesion()	{
	let BotonCerrar = document.getElementById('cerrar-sesion');
		BotonCerrar.addEventListener('click', async () =>{
      try{
        await CerrarLaSesion();
      }catch{

      }
    });

    
}   

/* *******POPUP  Error Loguin ********* */
 export function modalErrorLogin(error) { 
    
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
export function modalErrorSignUp(error){
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
	const publicado = document.getElementById('publicar-btn');
	const cerrarSinPublicar = document.getElementById('cerrar');
	botonAbrirModal.addEventListener('click', () => {
		modalPublicacion.classList.add('show');
	})
    cerrarSinPublicar.addEventListener('click', () => {
		modalPublicacion.classList.remove('show');
	})
  publicado.addEventListener('click', () => {
		modalPublicacion.classList.remove('show');
	})

	
}
/* Crear publicaciones */
  
export function CrearPost(){
    const FormularioPost = document.getElementById('post');
    FormularioPost.addEventListener('submit',async(e)=>{
    e.preventDefault();
    
    const fileInput = document.getElementById('my-file');
    const file = fileInput.files[0];
    const lugar = document.getElementById("lugar").value;
    const descripcion = document.getElementById("descripcion").value;
  
   try {
   
    await GuardarPost(lugar,descripcion);
    
   
  }
  catch(error) {
    console.error("Error adding document: ", error);
  }
    FormularioPost.reset();
 })
}


 /* Traer toda la coleccion y pintarla en la aplicacion */

export function mostrarPost() {
  const PostContainer = document.getElementById('post-container')
 
    leerPost()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        PostContainer.innerHTML += `<div class="containerPost">
          <h3>${doc.data().user}</h3>
          <i class="fas fa-map-marker-alt" id="lugar">${doc.data().lugar}</i>
          <img src="./imagenes/foto-prueba.jpg" width="100px"heigth="100px">
          <div class="icons-post">
          <i class="far fa-star"></i>
          <i class="far fa-comment"></i>
          <i class="far fa-envelope"></i>
          </div>
          <div class="post-descripcion">
        
          <h4> ${doc.data().descripcion}</h4>
          </div>
          <div class="edit-delete">
          <button><i class="fas fa-trash-alt"></i>Delete</button>
          <button><i class="fas fa-edit"></i>Editar</button>
          </div>
         </div>`
        })
      })
          
    
}
export function ActualizarPost(){
  const btnPublicar= document.getElementById('publicar-btn')
       btnPublicar.addEventListener('click',leerPost)

}


