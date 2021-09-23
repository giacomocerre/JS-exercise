var nodoBottone;
var nodoImg;
function gestoreLoad(){
	try{
		nodoBottone = document.getElementById("bottone");
		nodoBottone.onclick=gestioneBottone;
		nodoImg=document.getElementById("img");			//PRENDE IL TAG IMG DI ID "img";
	}
	catch(e){
		alert("gestoreLoad " +  e);
	}
}
function gestioneBottone(){
	try{
		var valore=nodoImg.getAttribute("src");
		var nodoPar=document.createElement("p");
		if(valore=="img/gattouno.png"){			//se il valore è gattouno cambia con gattodue;
			nodoImg.setAttribute("src", "img/gattodue.jpg"); // SETTA IL VALORE DEL ATTRIBUTO SRC CON GATTODUE.JPG;
		}else{			//se il valore è diverso da gattouno metti gattouno;
			nodoImg.setAttribute("src", "img/gattouno.png");		//SETTA IL VALORE DEL ATTRIBUTO SRC CON GATTOUNO.PNG;
		}
	}
	catch(e){
		alert("gestioneBottone" + e);
	}
}
window.onload=gestoreLoad;			//chiedere se va lasciato in fondo al codice oppure subito dopo la function di gestoreLoad;