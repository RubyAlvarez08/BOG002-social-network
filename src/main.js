// Este es el punto de entrada de tu aplicacion

import inicializeFirebase from '../Firebase/config.js';
import {router} from './routes.js';

inicializeFirebase();



window.addEventListener('load',() => {
  router(window.location.hash);
}); 

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});



