// Este es el punto de entrada de tu aplicacion

import inicializeFirebase from './Firebase/config.js';
import { home } from './Home/Home.js';
import { UsuarioAutenticado } from './Firebase/firebaseAuth.js';
import { FormularioDeRegistro } from './2.SingUp/SingUp.js';
import { RegistroUsuario, Google } from './2.SingUp/Dom-singup.js';
import { FormularioDeIngreso } from './3.Login/Login.js';
import { DatosDeLogin } from './3.Login/Dom-login.js';
import { timeline } from './4.Publicaciones/timeline.js';
import { FormularioPublicacion } from './4.Publicaciones/Dom-publicaciones.js'

/* Inicializacion de Firebase */
inicializeFirebase();

let content = document.getElementById('root');


/* Redireccionamiento entre paginas */
window.addEventListener('DOMContentLoaded', () => {
  router(window.location.hash);
});
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

const router = (route) => {
  let user = UsuarioAutenticado();
  switch (route) {
    case '':
      content.innerHTML = home()
      break;
    case '#/signUp':
      content.innerHTML =
        FormularioDeRegistro();
      RegistroUsuario();
      Google();
      break;
    case '#/login':
      content.innerHTML =
        FormularioDeIngreso();
      DatosDeLogin();

      break;
    case '#/timeline':
        content.innerHTML =
          timeline();
          FormularioPublicacion()
      
      
        break;
    default:
      console.log('error')
  }

}
