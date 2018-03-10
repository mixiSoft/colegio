
function iniciar_dos(){
			var elemento=document.getElementById('intro');
			
				lienzo=elemento.getContext('2d');
				lienzo.fillStyle="white";
				lienzo.font="bold 40px verdana, sans-serif";
				lienzo.textAlign="center";
				lienzo.textBaseline="middle";
				lienzo.fillText("BIENVENIDO",480,300);
		
}
window.addEventListener("load", iniciar_dos, false);
	
function iniciar(){
				var elemento = document.getElementById('intro');
				lienzo = elemento.getContext('2d');
				var imagen = new Image();
				imagen.src = 'proyect/images/logo.png';
				imagen.addEventListener("load", function(){
						lienzo.drawImage(imagen,380,70, 200,200); 
				
				}, false);
}
window.addEventListener("load", iniciar, false);		
		
	