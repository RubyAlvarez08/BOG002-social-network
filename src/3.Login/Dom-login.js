import { Login } from "../Firebase/firebaseAuth.js";

let user;
/* ********************login de usuario******************** */
export function DatosDeLogin() {
    const formularioLogin = document.getElementById('Form-login');
    formularioLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        // Obtener la info del usuario
        const email = document.getElementById('EmailUser').value;
        const password = document.getElementById('PasswordUser').value;

        //conectando firebase
        Login(email, password)
            .then((userCredential) => {
                // Signed in
                user = userCredential.user;
                window.location.hash = '#/timeline';

            })
            .catch((error) => {
                modalErrorLogin(error);
            });
    })
}

/* *******POPUP  Error Loguin ********* */
function modalErrorLogin(error) {

    const login_modal = document.getElementById('login_modal');
    const close = document.getElementById('close-login');

    if (error.code == "auth/user-not-found" || "auth/wrong-password") {
        login_modal.classList.add('show');
    }
    close.addEventListener('click', () => {
        login_modal.classList.remove('show');
    });
}
