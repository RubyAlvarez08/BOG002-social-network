

export const GuardarPost = (file,lugar,descripcion) =>  firebase.firestore().collection("post").add({
      file,
      lugar,
      descripcion
    })
    
export const leerPost= () =>  firebase.firestore().collection("post").get();

/* Cargando imagenes al storage */
export const upload = async({file})=>{
  let storageRef =  firebase.storage().ref().child('images/${file.name}');
  await storageRef.put(file);

  return storageRef;
}