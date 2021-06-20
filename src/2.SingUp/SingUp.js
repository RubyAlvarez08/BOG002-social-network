

export function FormularioDeRegistro() {

   let html = `
   <div class="fondo contenedor">
     <form id="formulario-sign-up">
       <div id="Name" class="input">
         <input type="text" id="NameUser"  name="nombre" placeholder="User name" maxlength="10"   title="Maximo 16 caracteres" required >
         <img src="" id="CampoVacioName" class="error">
       </div>
       <div id="Email" class="input">
         <input type="email" id="EmailUser" name="correo" placeholder="email" required > 
         <img src="" id="CampoVacioEmail" class="error">
       </div>
       <div id="Password" class="input">
         <input type="password" id="PasswordUser" name="password" placeholder ="password" required >
         <img src="" id="CampoVacioPassword" class="error">
       </div>
         <button type="submit" id="Register" class="btn" > REGISTER <a href="#Register"> </a> </button>
         <button type="button" id="google"><img src="imagenes/google.png"> </button>
      </form>
   </div>`;

   return html;

}




