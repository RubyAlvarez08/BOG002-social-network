

export function home() {
  
    const html = `
      
       <div class="fondo contenedor">
        <h1 class="Titulo">FoodFans</h1>
        <span>Social Network</span>
        <p>Postea tus mejores platos, comparte tu experiencia y enseñala a tus amigos.</p>


            <!-- Botones para el ingreso y registro -->
         <section id="Botones" class="Bienvenida">
      
            
            <button type="button" id="signUp" class="btnHome" value="Sign Up"> <a href="#/signUp"> SIGN UP</a></button>
            <button type="button" id="loginPpal" class="btnHome" value="login"> <a href="#/login">LOGIN</a></button>
        
         </section>

         </div>
        `;
    return html;
    
         
}




