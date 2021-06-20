
export const crearUsuario = (email, password) => firebase.auth()
.createUserWithEmailAndPassword(email, password)

export const Login = (email, password) => firebase.auth()
.signInWithEmailAndPassword(email, password);

export const withGoogle = (provider) => firebase.auth().signInWithPopup(provider);

export const UsuarioAutenticado = () => firebase.auth().currentUser;
/* const name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;
} */

export const CerrarLaSesion = () =>    firebase.auth().signOut()

export const estadoDeAutenticacion = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let name = user.displayName;
      console.log(name)
    } else {
      // User is signed out
      // ...
    }
  })


