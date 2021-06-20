
export function timeline(){

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
		  </div>
		</div> 
	 </header>
       <button type="submit" class="btn btn-publicar" id="abrir-modal"> Publicar </button> 
		<div class="all-post" id="post-container"></div>
	 <footer>
		<ul>
		<li><a href="#/timeline"><img src="./imagenes/Home.svg"></a>Inicio </li>
		<li><a href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
		<li><a href="#/search"><img src="./imagenes/Search.svg"></a>Buscar </li>
       </ul>
	  </footer>
	  
    </div>
`
    return html;
}






