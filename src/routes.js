
import {home} from './Pages/Home.js';
import { FormularioDeIngreso } from './Pages/Login.js';
import { FormularioDeRegistro } from './Pages/SingUp.js';
import {perfil} from './Pages/perfil.js'
import { timeline } from './Pages/timeline.js';
import { RegistroUsuario, DatosDeLogin, Google, CerrarSesion,FormularioPublicacion, CrearPost, mostrarPost} from './Pages/index.js';
import { UsuarioAutenticado} from '../Firebase/firebaseAuth.js'

 

 
export const  router = (route) => {
    let content = document.getElementById('root');
    let user = UsuarioAutenticado();
   
    switch(route){
        case '':
        content.innerHTML= home()
                
        break;
        case '#/signUp':
            content.innerHTML =
            
            FormularioDeRegistro();
            RegistroUsuario();
            Google();
        break;   
        case '#/login':
            content.innerHTML=
            FormularioDeIngreso();
            DatosDeLogin();
            Google();
        break;
        case '#/timeline':
        if(user){
            content.innerHTML = 
            timeline();
            FormularioPublicacion();
            CrearPost();
            mostrarPost();
            CerrarSesion();
         }else{
            window.location.hash = '';
         }
         break;
         case '#/profile':
              content.innerHTML =
                perfil();
            
             
         break;
            


        default: 
        console.log('error') 
    }


    
} 


