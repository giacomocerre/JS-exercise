var nodoValue;
var nodoBtn;
function gestioneLoad(){
	try{
		nodoBtn=document.getElementById("btn");
		nodoBtn.onclick=gestioneValue;			//crea evento click del bottone;
		nodoValue=document.getElementById("text").value; //predne il valore defaul vuoto del input text;
		//CREO NUOVO TAG <img>
		var newImg=document.createElement("img");
		//SETTO L'ID DI <img> COME --- id="img";
		newImg.setAttribute("id", "img");
		//appendo <img> a body;
		document.body.appendChild(newImg);
	}
	catch(e){
		alert("gestioneLoad"+e);
	}
}
function gestioneValue(){
	try{
		var newValue=document.getElementById("text").value; //nuova variabile con nuovo valore del campo input text;
		if(newValue == "immagine" || newValue=="linux"){
		//INTERCETTO id="img";
			var nodoImg=document.getElementById("img");
		//CREO UNA VARIABILE CON IL LINK DELL'IMMAGINE;
			var linkImg="img/"+newValue+".png";
		//SETTO IL SRC CON IN VALORE SCRITTO NELLA TEXT BOX;
			nodoImg.setAttribute("src", linkImg);
		}else{
			alert("non ci sono immagini di quel nome")
		}
	}
	catch(e){
		alert("gestioneValue " + e);
	}
}
window.onload=gestioneLoad;