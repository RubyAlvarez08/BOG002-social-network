
import { crearUsuario, withGoogle } from "../Firebase/firebaseAuth.js";



/* *********************Registrar usuario con email y password********************* */
export function RegistroUsuario() {

   const formularioSignUp = document.getElementById('formulario-sign-up');
   formularioSignUp.addEventListener('submit', (e) => {
      e.preventDefault();
      const name= document.getElementById('NameUser').value;
      const email = document.getElementById('EmailUser').value;
      const password = document.getElementById('PasswordUser').value;  
   
      crearUsuario(email, password,name)
      
    })
}

/* ********************Registrar con Google***************** */
export function Google() {
   const BotonGoogle = document.getElementById('google');
   BotonGoogle.addEventListener('click', async () => {
      try {
         let provider = new firebase.auth.GoogleAuthProvider();
         let result = await withGoogle(provider);
         let token = result.credential;
         console.log(token)
         window.location.hash = '#/timeline';
      } catch (error) {
         console.log(error)
      }

   })
}

/* *******POPUP  Error Registro ********* */
export function modalErrorSignUp(error) {
   const container_modal = document.getElementById('container_modal');
   const close = document.getElementById('close');

   if (error.code == "auth/email-already-in-use") {
      container_modal.classList.add('show');
   }

   close.addEventListener('click', () => {
      container_modal.classList.remove('show');
   });
}

 /* function DatosDeRegistro(){
const formulario = document.getElementById('formulario-sign-up');
const inputs = document.querySelectorAll('.input');

const expresiones = {
   nombre: /^[a-zA-Z0-9\_\-]{4,20}$/, // Letras, numeros, guion y guion_bajo
   password: /^.{6,12}$/, // 4 a 12 digitos.
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}
const campos = {
   nombre: false,
   correo: false,
   password: false
}
  const  validarFormulario = (e) => {
   switch (e.target.name) {

      case "nombre":
         if(e.target.value!="" && e.target.value.length >4 && expresiones.nombre.test(e.target.value)){
            document.getElementById("Name").style.border = "3px solid green"
            document.getElementById("CampoVacioName").src ="./imagenes/comprobado.png"
            campos["nombre"] = true;
         } else {
            document.getElementById("Name").style.border = "3px solid red"
            document.getElementById("CampoVacioName").src= "./imagenes/cancelar.png"
            campos["nombre"] = false;}
      break;
         case "correo":
            if(expresiones.correo.test(e.target.value)){
               document.getElementById("Email").style.border = "3px solid green"
               document.getElementById("CampoVacioEmail").src ="./imagenes/comprobado.png"
               campos["correo"] = true;
            } else {
               document.getElementById("Email").style.border = "3px solid red"
               document.getElementById("CampoVacioEmail").src= "./imagenes/cancelar.png"
               campos["correo"] = false;}
      break;
      case "password":
         if(e.target.value.length >6 ||expresiones.password.test(e.target.value)){
            document.getElementById("Password").style.border = "5px solid green"
            document.getElementById("CampoVacioPassword").src ="./imagenes/comprobado.png"
            campos["password"] = true;
         } else {
            document.getElementById("Password").style.border = "5px solid red"
            document.getElementById("CampoVacioPassword").src= "./imagenes/cancelar.png"
            campos["password"] = false;}
      break;
         }
      }

inputs.forEach((input) => {
   input.addEventListener('keyup', validarFormulario);
   input.addEventListener('blur', validarFormulario);
});

// enlazando el formulario con firebase
formulario.addEventListener('submit', (e) => {
   e.preventDefault();
   if( campos.nombre && campos.password && campos.correo ){

    const email = document.getElementById("EmailUser").value;
    const password= document.getElementById("PasswordUser").value;
    const name = document.getElementById("NameUser").value;
    Registro(email, password, name);
   }
   else {
      alert("completa correctamente todos los campos") ;
   }
});
//Mostrar y ocultar contraseña
const contrasena = document.getElementById("PasswordUser");
const mostrarPassword = document.getElementById("PasswordUser");
      mostrarPassword.addEventListener("keydown", () =>{
// Eliminamos su type del input
      contrasena.removeAttribute("type");
});
      mostrarPassword.addEventListener("keyup", ( ) => {
// Agregamos type de input
      contrasena.setAttribute("type", "password");
});

} */