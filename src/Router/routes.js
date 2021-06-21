import { UsuarioAutenticado } from '../Firebase/firebaseAuth.js';
import { pages } from '../vistas.js';
import { RegistroUsuario, Google } from '../2.SingUp/Dom-singup.js';
import { DatosDeLogin } from '../3.Login/Dom-login.js';
import { FormularioPublicacion, CrearPost, mostrarPost } from '../4.Publicaciones/Dom-publicaciones.js';

export const router = (route) => {
    let content = document.getElementById('root');
    let user = UsuarioAutenticado();
    switch (route) {
      case '':
        content.innerHTML = pages.home()
        break;
      case '#/signUp':
        content.innerHTML =
          pages.FormularioDeRegistro();
        RegistroUsuario();
        Google();
        break;
      case '#/login':
        content.innerHTML =
          pages.FormularioDeIngreso();
        DatosDeLogin();
  
        break;
      case '#/timeline':
        if(user) {
            content.innerHTML =
            pages.timeline();
           FormularioPublicacion();
           CrearPost();
           mostrarPost()
         
        }else {
            window.location.hash = '';
        }
          break;
      default:
        console.log('error')
    }
  
  }
  