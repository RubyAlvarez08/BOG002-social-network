import { UsuarioAutenticado } from '../Firebase/firebaseAuth.js';
import { pages } from '../vistas.js';

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
          content.innerHTML =
            pages.timeline();
            FormularioPublicacion()
        
        
          break;
      default:
        console.log('error')
    }
  
  }
  