
import {home, IngresarConGoogle} from './Pages/Home.js';
//import {FormularioDeRegistro,  Datos_de_registro} from './Pages/SingUp.js';
//import {FormularioDeIngreso,DatosDeLogin} from './Pages/Login.js';
 //import {SoloUsuarios} from './Firebase/firebaseAuth.js'; 
/* import { inicio, CerrarSesion, ParaPublicar} from './Pages/inicio.js';
import { perfil, name  } from './Pages/perfil.js';
import { FormularioPerfilDeUsuario, EditarPerfil } from './Pages/DatosUsuario.js';
import { Error404} from './Pages/Error 404.js';
import { search } from './Pages/search.js'; */
//import {MostrarPublicaciones } from './Firebase/firestore.js';
 

 
export const  router = (route) => {
    let content = document.getElementById('root');
   /*  // para el registro
    const container_modal = document.getElementById('container_modal')
    container_modal.classList.remove('show');
    // para el login
    const login_modal = document.getElementById('login_modal');
    login_modal.classList.remove('show');
    
    content.innerHTML = "";
    let user = SoloUsuarios(); */
    switch(route){
        case '':
        content.innerHTML= home()
        break;
        case '#/withGoogle':
            IngresarConGoogle();

        default: 
        console.log('error')
    }


    
} 


