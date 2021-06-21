


export const GuardarPost = (lugar, descripcion) => firebase.firestore().collection("post").add({
  lugar,
  descripcion
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});

export const getPost = () => firebase.firestore().collection("post").get();

// borrar Post
export const borrarPost = (id) => firebase.firestore().collection("post").doc(id).delete();

// Obtener data del Post
export const editPost = (id) => firebase.firestore().collection("post").doc(id).get();

// Guardar cambios
export const updateEdit = (id, updateEdit) => firebase.firestore().collection("post").doc(id).update(updateEdit);

/* Cargando imagenes al storage */
  export const subirImagen = (file)=>{
  let storageRef =  firebase.storage().ref(`images/${file.name}`);
  console.log(storageRef);
  let uploadPost = storageRef.put(file)

  uploadPost.getDownloadURL()
  .then(function(url) {
    let img = document.getElementById('img-post');
    img.src = url;
   })
   .catch(function(error) {
  // Handle any errors
   });

}



