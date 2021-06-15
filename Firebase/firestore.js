


export const GuardarPost = (lugar,descripcion) =>  firebase.firestore().collection("post").add({
    lugar,
    descripcion,
    
    })
    
export const leerPost= () =>  firebase.firestore().collection("post").get();



 /* Cargando imagenes al storage */
 export const upload = async({file})=>{
  let storageRef =  firebase.storage().ref().child(`images/${file.name}`);
 let uploadPost = await storageRef.put(file)
 

  return uploadPost;
} 

/* Database para almacenar las imagenes y posteriormente mostrarlas */
/* const addDoc = async({colection,data})=>{
   let document = {
     ...data,
     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
   }
} */