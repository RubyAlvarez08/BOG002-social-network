

export const crearUsuario = (email, password) => firebase.auth()
.createUserWithEmailAndPassword(email, password);

export const nuevoIngreso = (email, password) => firebase.auth()
.signInWithEmailAndPassword(email, password);

export const withGoogle = (provider) => firebase.auth().signInWithPopup(provider);

