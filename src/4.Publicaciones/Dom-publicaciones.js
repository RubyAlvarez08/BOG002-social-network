import { CerrarLaSesion, UsuarioAutenticado } from '../Firebase/firebaseAuth.js';
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

// es false inicialmente porque por defecto el form no va a editar va a guardar
let editStatus = false;
let id = '';

export function CrearPost() {

    const FormularioPost = document.getElementById('post');
    const PostContainer = document.getElementById('post-container')



    FormularioPost.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fileInput = document.getElementById('my-file');
        const file = fileInput.files[0];
        const lugar = document.getElementById("lugar").value;
        const descripcion = document.getElementById("descripcion").value;

        await GuardarPost(lugar, descripcion);


        FormularioPost.reset();
    })


    getPost()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                PostContainer.innerHTML += `<div class="containerPost">
        
            <i class="fas fa-map-marker-alt">${doc.data().lugar}</i>
            <img  id="img-post" src="./imagenes/foto-prueba.jpg">
            <div class="icons-post">
            <i class="far fa-star"></i>
            <h4 id='contador'>1</h4>
            
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
            eliminar();
            editar();
        })

}





//Borrar post
function eliminar() {

    const BotonEliminar = document.querySelectorAll('.delete');

    BotonEliminar.forEach(button => {
        button.addEventListener('click', async (e) => {
            console.log(e.target.dataset.id);
            await borrarPost(e.target.dataset.id);
        })
    })
}
//Editar post
function editar() {
    const BotonEditar = document.querySelectorAll('.edit');
    const modalEditar = document.getElementById('edit_modal');
    const cerrarSinEditar = document.getElementById('cerrar');


    BotonEditar.forEach(button => {
        button.addEventListener('click', async (e) => {
            modalEditar.classList.add('show');
            const editado = document.getElementById('editar-btn');
            const descripcionEdit = document.getElementById('edit-descripcion');
            const lugarEdit = document.getElementById('lugar-edit');

            const doc = await editPost(e.target.dataset.id);
            const id = doc.id;

            /* info de los post traidos de firebase */
            const datosDescripcion = doc.data().descripcion;
            const datosLugar = doc.data().lugar;

            descripcionEdit.value = datosDescripcion;
            lugarEdit.value = datosLugar;

            /*  Nuevos datos guardados y enviados a la coleccion */
            editado.addEventListener('click', async () => {
                await updateEdit(id, {
                    lugar: lugarEdit.value,
                    descripcion: descripcionEdit.value,
                })
            })
            editado.addEventListener('click', () => {
                modalEditar.classList.remove('show');
            })
            cerrarSinEditar.addEventListener('click', () => {
                modalEditar.classList.remove('show');
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