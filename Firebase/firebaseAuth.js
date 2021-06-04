

export const crearUsuario = (email, password) => firebase.auth()
.createUserWithEmailAndPassword(email, password)


export const Login = (email, password) => firebase.auth()
.signInWithEmailAndPassword(email, password);

export const withGoogle = (provider) => firebase.auth().signInWithPopup(provider);


export const UsuarioAutenticado = () => firebase.auth().currentUser;

export const estadoDeAutenticacion = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    
      let uid = user.uid;
      
    
      
    } else {
      // User is signed out
      // ...
    }
  })