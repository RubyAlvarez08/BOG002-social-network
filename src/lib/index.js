// aqui exportaras las funciones que necesites
import {Router} from '../router.js';
import {Rutas} from '../routes.js';
export const myFunction = () => {
  // aqui tu codigo
  // console.log('Hola mundo!');
};

window.addEventListener('hashchange', () => {
  console.log(window.location.hash)
})


// cargando vistas

 const ROUTER = new Router(Rutas);
 
 document.getElementById("signUpGoogle").addEventListener("click", ()=>{
  ROUTER.load('EntrarConGoogle');
  
 })
 document.getElementById("signUp").addEventListener("click", ()=>{
  ROUTER.load('Registro')
 })
 document.getElementById("login").addEventListener("click", ()=>{
  ROUTER.load('Ingreso')
 })
 



