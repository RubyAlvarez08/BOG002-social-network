


export const GuardarPost = (lugar,descripcion) =>  firebase.firestore().collection("post").add({
    lugar,
    descripcion,
    
  })
    
export const leerPost= () =>  firebase.firestore().collection("post").get();

// borrar Post
export const borrarPost = (id) => firebase.firestore().collection("post").doc(id).delete();

// Obtener data del Post
export const editPost = (id) => firebase.firestore().collection("post").doc(id).get();

// Guardar cambios
export const updateEdit = (id) => firebase.firestore().collection("post").doc(id).update(updateEdit);

  /* Cargando imagenes al storage */
/*  export const subirImagen = async({file})=>{
  let storageRef =  firebase.storage().child(`images/${file}`);
  console.log(storageRef);
  let uploadPost = await storageRef.put(file)

   return uploadPost;

}  */ 
/* export const mostrarImagen =()=>{
  subirImagen.getDownloadURL()
  .then(function(url) {
    let img = document.getElementById('img-post');
    img.src = url;
   })
   .catch(function(error) {
  // Handle any errors
   });
} */

