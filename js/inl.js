function iniciar_dos(){
			var elemento=document.getElementById('intro');
			//var imagen = new Image();
			//imagen.src = 'proyect/images/logo.png';
				lienzo=elemento.getContext('2d');
				lienzo.fillStyle="white";
				lienzo.fillRect(350,230,250,40);
				lienzo.globalCompositeOperation="destination-atop";
				lienzo.fillStyle="#AAAAFF";
				lienzo.font="bold 40px verdana, sans-serif";
				lienzo.textAlign="center";
				lienzo.textBaseline="middle";
				lienzo.fillText("BIENVENIDO",480,250);
		
}
window.addEventListener("load", iniciar_dos, false);
	