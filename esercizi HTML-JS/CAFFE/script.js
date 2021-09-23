var nodoNumeroCaps;
var nodoAdd;
var nodoQuantiCaffe;
var nodoCodice;
var nodoEroga;
var nodoNameDebito;
var nodoVisualizza;
var nodoDebito;
var capsule;
var crediti;
function gestoreLoad(){
	try{
		nodoNumeroCaps=document.getElementById("numero_capsule");
		nodoAdd=document.getElementById("add");
		nodoQuantiCaffe=document.getElementById("quanti_caffe");
		nodoCodice=document.getElementById("codice");
		nodoEroga=document.getElementById("eroga");
		nodoNameDebito=document.getElementById("nameDebito");
		nodoVisualizza=document.getElementById("visualizza");
		nodoDebito=document.getElementById("debito");
		//text.value a "";
		nodoNumeroCaps.value="";
		nodoQuantiCaffe.value="";
		nodoCodice.value="";
		nodoNumeroCaps.value="";
		nodoNameDebito.value="";
		//eventi
		nodoAdd.onclick=gestioneAdd;
		nodoEroga.onclick=gestioneEroga;
		nodoVisualizza.onclick=gestioneVisualizza;
		capsule=0;
		crediti={};
	}catch(e){
		alert("gestioneLoad " + e);
	}
}
function gestioneAdd(){
	try{
		var capsulePresenti=Number(nodoNumeroCaps.value);
		capsule+=capsulePresenti;
		if(capsulePresenti<=0){
			alert("ricaricare macchinetta!!!")
		}
	}catch(e){
		alert("gestioneAdd " + e);
	}
}
function gestioneEroga(){
	try{
		var capsuleDaErogare=Number(nodoQuantiCaffe.value)
		var codiceAccredito=nodoCodice.value;
		if(capsuleDaErogare<=capsule){
			capsule-=capsuleDaErogare;
			if(codiceAccredito in crediti){
				crediti[codiceAccredito]+=capsuleDaErogare;
			}else{
				crediti[codiceAccredito]=capsuleDaErogare;
			}
		}
	}catch(e){
		alert("gestioneEroga " + e);
	}
}
function gestioneVisualizza(){
	try{
		var codiceVisualizza=nodoNameDebito.value;
		var creditoCorrente;
		if(codiceVisualizza in crediti){
			creditoCorrente=crediti[codiceVisualizza];
		}else{
			creditoCorrente=0;
		}
		nodoDebito.value=codiceVisualizza+":"+creditoCorrente+"  "+"capsule rimanenti"+capsule;
	}catch(e){
		alert("gestioneVisualizza " + e);
	}
}
window.onload=gestoreLoad;