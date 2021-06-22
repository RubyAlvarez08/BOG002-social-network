import { modalErrorSignUp } from '../2.SingUp/Dom-singup.js';
import { modalErrorLogin } from '../3.Login/Dom-login.js';



/* Registro de usuario en la app */
export const crearUsuario = (email, password, name) => firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    window.location.hash = '#/timeline';
    
    const datosUsuario = result.user.updateProfile({ displayName: name });
    
    return datosUsuario


  })
  .catch((error) => {
    modalErrorSignUp(error)
  })

export const Login = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    window.location.hash = '#/timeline';
    return result
  })
  .catch((error) => {
    modalErrorLogin(error);
  });

export const withGoogle = (provider) => firebase.auth().signInWithPopup(provider);


export const UsuarioAutenticado = () => firebase.auth().currentUser;

export const CerrarLaSesion = () => firebase.auth().signOut()

export const estadoDeAutenticacion = () => firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let name = user.displayName;
    console.log(name)
  } else {
    // User is signed out
    // ...
  }
})


