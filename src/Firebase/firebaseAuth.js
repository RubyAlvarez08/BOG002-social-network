import { modalErrorSignUp } from '../2.SingUp/Dom-singup.js';
import { modalErrorLogin } from '../3.Login/Dom-login.js';

let user;

/* Registro de usuario en la app */
export const crearUsuario = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    window.location.hash = '#/timeline';
    console.log(user);

  })
  .catch((error) => {
    modalErrorSignUp(error)
  })

export const Login = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    user = userCredential.user;
    window.location.hash = '#/timeline';

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


