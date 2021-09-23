//inizializiamo come vuote le varibiali correnti;
var nodoValuta;
var nodoFattore;
var nodoImposta;
var nodoImporto;
var nodoConverti;
var nodoRisultato;
// variabili dello stato corrente per la memorizzazione dei valori;
var valutaCorrente;
var fattoreCorrente;
function gestioneLoad(){
	try{
		nodoValuta=document.getElementById("valuta");
		nodoFattore=document.getElementById("fattore");
		nodoImposta=document.getElementById("imposta");
		nodoImporto=document.getElementById("importo");
		nodoConverti=document.getElementById("converti");
		nodoRisultato=document.getElementById("risultato");
		//settare i valori delle text box a nodo.value="" SEMPRE;
		nodoValuta.value = "";
 		nodoFattore.value = "";
 		nodoImporto.value = "";
 		nodoRisultato.value = "";
 		//lancio delle funzioni con i pulsanti (registro l'evento .onclick);
 		nodoImposta.onclick = gestoreImposta;
 		nodoConverti.onclick = gestoreConverti;

	}catch(e){
		alert("gestioneLoad " + e);
	}

}
//Click on btn imposta;
function gestoreImposta(){
	try{
		valutaCorrente=nodoValuta.value;
		fattoreCorrente=nodoFattore.value;	
		nodoImporto.value="";
		nodoRisultato.value="";

	}catch(e){
		alert("gestoreImposta " + e)
	}
	
}
//Click on btn converti;
function gestoreConverti(){
	try{
		//calcolo fattore di conversione;
		nodoRisultato.value=valutaCorrente + "" + nodoImporto.value * fattoreCorrente;

	}catch(e){
		alert("gestoreConverti " + e)
	}
}
window.onload=gestioneLoad;