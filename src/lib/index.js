// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  // console.log('Hola mundo!');
};

 
import {Router} from '../router.js';
import {Rutas} from '../routes.js';
 const ROUTER = new Router(Rutas);
 document.getElementById("signUpGoogle").addEventListener("click", ()=>{
  ROUTER.load('EntrarConGoogle')
 })


//  onclick="ROUTER.load('signUpGoogle')">

// https://dev.to/alexcamachogz/creando-un-router-con-vanilla-javascript-27pl