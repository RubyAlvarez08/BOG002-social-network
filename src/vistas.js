import { home } from './Home/Home.js';
import { FormularioDeRegistro } from './2.SingUp/SingUp.js';
import { FormularioDeIngreso } from './3.Login/Login.js';
import { timeline } from './4.Publicaciones/timeline.js';

/* Aqui se importan cada templete y luego este objeto se exporta al archivo routes y 
segun el hashchange se renderiza  */
export const pages = {
    home,
    FormularioDeRegistro,
    FormularioDeIngreso,
    timeline
}