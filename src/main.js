// Este es el punto de entrada de tu aplicacion

import inicializeFirebase from './Firebase/config.js';
import { router} from './Router/routes.js'



/* Inicializacion de Firebase */
inicializeFirebase();




/* Redireccionamiento entre paginas */
window.addEventListener('DOMContentLoaded', () => {
  router(window.location.hash);
});
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

