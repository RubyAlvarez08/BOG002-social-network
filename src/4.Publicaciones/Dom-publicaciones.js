/* import { GuardarPost, leerPost, borrarPost, editPost, updateEdit } from '../Firebase/firestore.js'; */
import { CerrarLaSesion } from '../Firebase/firebaseAuth.js';
import { GuardarPost, getPost, borrarPost, editPost, updateEdit } from '../Firebase/firestore.js';


/* se abre el POPUp que publicar */
export function FormularioPublicacion() {
    const botonAbrirModal = document.getElementById('abrir-modal');
    const modalPublicacion = document.getElementById('post_modal');
    const publicado = document.getElementById('publicar-btn');
    const cerrarSinPublicar = document.getElementById('cerrar');

    botonAbrirModal.addEventListener('click', () => {
        modalPublicacion.classList.add('show');
    })
    cerrarSinPublicar.addEventListener('click', () => {
        modalPublicacion.classList.remove('show');
    })
    publicado.addEventListener('click', () => {
        modalPublicacion.classList.remove('show');
    })
}
/* Crear publicaciones en firestore */

export function CrearPost() {

    const FormularioPost = document.getElementById('post');
    FormularioPost.addEventListener('submit', async (e) => {
        e.preventDefault();

        /*   const fileInput = document.getElementById('my-file');
          const file = fileInput.files[0]; */
        const lugar = document.getElementById("lugar").value;
        const descripcion = document.getElementById("descripcion").value;
        console.log(lugar, descripcion);
        try {
            await GuardarPost(lugar, descripcion);

        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
        FormularioPost.reset();
    })

}



/* Traer toda la coleccion y pintarla en la aplicacion */

export function mostrarPost() {
    const PostContainer = document.getElementById('post-container')

    getPost()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                PostContainer.innerHTML += `<div class="containerPost">
        
            <i class="fas fa-map-marker-alt">${doc.data().lugar}</i>
            <img  id="img-post" src="">
            <div class="icons-post">
            <i class="far fa-star"></i>
            <i class="far fa-comment"></i>
            <i class="far fa-envelope"></i>
            </div>
            <div class="post-descripcion">
          
            <h4> ${doc.data().descripcion}</h4>
            </div>
            <div class="edit-delete">
            <button class="delete" data-id="${doc.id}"><i class="fas fa-trash-alt "></i>Delete</button>
            <button class="edit" data-id="${doc.id}"><i class="fas fa-edit" ></i>Editar</button>
            </div>
           </div>`
            })
            agregarListener();
        })



}


function agregarListener() {
    //Borrar post
    const BotonEliminar = document.querySelectorAll('.delete');
    const BotonEditar = document.querySelectorAll('.edit');
    const modalPublicacion = document.getElementById('post_modal');
    const publicado = document.getElementById('publicar-btn');

    BotonEliminar.forEach(button => {
        button.addEventListener('click', async (e) => {
            console.log(e.target.dataset.id);
            await borrarPost(e.target.dataset.id);
        })
    })
    //Editar post
    let editPostStatus = false;

    BotonEditar.forEach(button => {
        button.addEventListener('click', async (e) => {
            console.log(e.target.dataset.id);
            modalPublicacion.classList.add('show');
            const doc = await editPost(e.target.dataset.id);
            const datosDescripcion = doc.data().descripcion;
            const datosLugar = doc.data().lugar;
            publicado.innerText = 'Actualizar';

            descripcion.value = datosDescripcion;
            lugar.value = datosLugar;

            let id = doc.id;
            publicado.addEventListener('click', async () => {
                await updateEdit(id, {
                    lugar: lugar.value,
                    descripcion: descripcion.value,
                })
            })





        })

    })
}






export function CerrarSesion() {
    let BotonCerrar = document.getElementById('cerrar-sesion');
    BotonCerrar.addEventListener('click', async () => {
        try {
            await CerrarLaSesion();
        } catch {

        }
    });


}