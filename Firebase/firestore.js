

export const SavePost = (lugar,descripcion) => db.collection("post").add({
        lugar,
        descripcion
    })
    
