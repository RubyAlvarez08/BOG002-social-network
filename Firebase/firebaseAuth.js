
export const crearUsuario = (name,email, password) => firebase.auth()
.createUserWithEmailAndPassword(name,email, password)

export const Login = (email, password) => firebase.auth()
.signInWithEmailAndPassword(email, password);

export const withGoogle = (provider) => firebase.auth().signInWithPopup(provider);

export const UsuarioAutenticado = () => firebase.auth().currentUser;

export const CerrarLaSesion = () =>    firebase.auth().signOut()

export const estadoDeAutenticacion = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let name = user.displayName;
      Read()
      console.log(name)
    } else {
      // User is signed out
      // ...
    }
  })


