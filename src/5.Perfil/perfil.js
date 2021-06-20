
export function perfil(){

    let html= `
	
	<div class="container">
	 <header>
	   <div class="menu">
		  <div class="logo"> 
		  <h1>FoodFans<h1>
		</div>
		<div id="configuracion"><img src="./imagenes/Setting.svg">
		  <div class="enlaces" id="enlaces">
		    <h3 class= "setting" id="cerrar-sesion"><a href="#">Cerrar sesion</a></h3>
			<span class= "setting"><a href="#/editarPerfil">Editar Perfil</a></span>
		  </div>
		</div> 
	 </header>
    
	  <div id='perfil' class="perfil">
	  <img src="" id="foto-perfil">
	  <h1 id="Nombre-de-usuario"></h1>
	  <p class="descripcion"> Aqui va una breve descripcion del usuario</p>
	  </div>
	  <div class="all-post" id="post-container"></div>
	  
	
	  <footer>
	  <ul>
	  <li><a href="#/timeline"><img src="./imagenes/Home.svg"></a>Inicio </li>
	  <li><a href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
	  <li><a href="#/search"><img src="./imagenes/Search.svg"></a>Buscar </li>
	 </ul>
	</footer>
	</div>`;    
    return html;
	
  }


 

  



					 

	

	