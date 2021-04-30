// Creando rutas como objetos, funciones en router.js
// opcion 1 
export const Rutas = {
    home: {
        ruta: "/",
        template:`
        
        <h1>FoodFans</h1>

        <span>Social Network</span>
        <p>Postea tus mejores platos, comparte tu experiencia y enseñala a tus amigos.</p>
        
        <section id="Botones" class="Bienvenida">
        <button type="button" id="signUpGoogle" class="btn" > <img src="src/imagenes/google.png">SIGN UP WITH GOOGLE</button>
        <button type="button" id="signUp"       class="btn" >SIGN UP</button>
        <button type="button" id="login"        class="btn" > LOGIN</button>
      </section>
    `,

    },
    EntrarConGoogle: {
        ruta: "/withGoogle",
        template:`<h1>Ingreso con google</h1>`,
    },
    Registro: {
        ruta: "/register",
        template:`
        <h1> Created account </h1>
        <form>
        <input type="text" class="input" placeholder="User name"> 
        <input type="email" class="input" placeholder="email"> 
        <input type="password" class="input" placeholder="password"> 
        
        <button type="submit" id="Register" class="btn" > <a href="#Register"> REGISTER</a></button>
        </form>`,
    },  
     Ingreso: {
        ruta: "/login",
        template:`<h1>Ingreso</h1>`,
    },
}







