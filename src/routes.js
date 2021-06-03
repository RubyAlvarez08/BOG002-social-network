
import {home} from './Pages/Home.js';
import { FormularioDeIngreso } from './Pages/Login.js';
import { FormularioDeRegistro } from './Pages/SingUp.js';
import { timeline } from './Pages/timeline.js';
import { RegistroUsuario, DatosDeLogin, Google, CerrarSesion} from './Pages/index.js';

 

 
export const  router = (route) => {
    let content = document.getElementById('root');
   
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
        content.innerHTML = 
            timeline();
            /* FormularioPublicacion(); */
            CerrarSesion();
            


        default: 
        console.log('error')
    }


    
} 


