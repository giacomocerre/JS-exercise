// corrente
var nodoOraCorr;
var nodoMinCorr;
var nodoImpostaCorr;
var nodoReadCorr;
// allarme
var nodoOraAll;
var nodoMinAll;
var nodoImpostaAllarme;
var nodoReadAllarme;
// avanza
var nodoAvanza;
// sveglia
var nodoSvaglia;
//reset
var nodoReset;
var valoreOra;
var valoreMin;
var valoreOraAll;
var valoreMinAll;
// nodi messaggi
var messaggioImposta;
var messaggioAllarme;
var messaggioAvanza;
function gestioneLoad(){
	try{
		//corrente
		nodoOraCorr=document.getElementById("ora_corr");
		nodoMinCorr=document.getElementById("min_corr");
		nodoImpostaCorr=document.getElementById("imp_ora_corr");//button ora corr
		nodoReadCorr=document.getElementById("ora_read");
		//allarme
		nodoOraAll=document.getElementById("ora_all");
		nodoMinAll=document.getElementById("min_all");
		nodoImpostaAllarme=document.getElementById("imp_ora_all"); //button ora allarme
		nodoReadAllarme=document.getElementById("all_read");
		// avanza
		nodoAvanza=document.getElementById("avanza"); //button avanza
		// output
		nodoSvaglia=document.getElementById("sveglia");
		//reset
		nodoReset=document.getElementById("reset");
		//get dei testi errore
		messaggioImposta=document.getElementById("messaggio_imposta");
		messaggioAllarme=document.getElementById("messaggio_all");
		messaggioAvanza=document.getElementById("messaggio_avanza");
		// azzero campi value
		nodoOraCorr.value="";
		nodoMinCorr.value="";
		nodoReadCorr.value="";
		nodoOraAll.value="";
		nodoMinAll.value="";
		nodoReadAllarme.value="";
		nodoSvaglia.value="";
		// genero eventi onclick
		nodoImpostaCorr.onclick=gestioneImpostaOraCorrente;
		nodoImpostaAllarme.onclick=gestioneImpostaAllarme;
		nodoAvanza.onclick=gestioneAvanza;
		nodoReset.onclick=gestioneReset;
		// creare nodi testo per errori
		var nodoTesto1=document.createTextNode("");
		messaggioImposta.appendChild(nodoTesto1);
		var nodoTesto2=document.createTextNode("");
		messaggioAllarme.appendChild(nodoTesto2);
		var nodoTesto3=document.createTextNode("");
		messaggioAvanza.appendChild(nodoTesto3);

	}catch (e){
		alert("gestioneLoad" + e);
	}
}
// BTN click evento imposta ora corr
function gestioneImpostaOraCorrente(){
	try{
		nodoSvaglia.value="";
		valoreOra = Number(nodoOraCorr.value);
		valoreMin = Number(nodoMinCorr.value);
		//Errore campi vuoti;
		if(nodoOraCorr.value==""){
			scriviMessaggio(messaggioImposta, "il campo ORE \xE8 vuoto, compilare il campo!")
			return;
		}
		if(nodoMinCorr.value==""){
			scriviMessaggio(messaggioImposta, "il campo MIN \xE8 vuoto, compilare il campo!")
			return;
		}
		// Errore per le stringhe non numeri;
		if(isNaN(valoreOra)){
			scriviMessaggio(messaggioImposta, "il campo ORE non \xE8 un numero!")
			return;
		}
		if(isNaN(valoreMin)){
			scriviMessaggio(messaggioImposta, "il campo MIN non \xE8 un numero!")
			//RETURN serve per stoppare il processo della funzione nel caso in cui si verifichi isNaN();
			return;
		}
		//Errore numeri minori di 0;
		if((nodoOraCorr.value < 0) || (nodoMinCorr.value < 0)){
			scriviMessaggio(messaggioImposta, "Inserire campi MAGGIORI. di 0!")
			return;
		}
		//Errore numeri MAGGIORI di ore:23 o min:59;
		if(nodoOraCorr.value>23){
			scriviMessaggio(messaggioImposta, "Il numero inserito per le ORE \xE8 troppo grande (min:0 max:23)");
			return;
		}
		if(nodoMinCorr.value>59){
			scriviMessaggio(messaggioImposta, "Il numero inserito per i MIN \xE8 troppo grande (min:0 max:59)");
			return;
		}
		nodoReadCorr.value=nodoOraCorr.value + ":" + nodoMinCorr.value;	
		scriviMessaggio(messaggioImposta, "");
	}catch(e){
		alert("gestioneImpostaOraCorrente" + e);
	}
}
// BTN click evento imposta ora allarme
function gestioneImpostaAllarme(){
	try{
		nodoSvaglia.value="";
		valoreOraAll=Number(nodoOraAll.value);
		valoreMinAll=Number(nodoMinAll.value);
		//Errore campi vuoti;
		if(nodoOraAll.value==""){
			scriviMessaggio(messaggioAllarme, "il campo ORE \xE8 vuoto, compilare il campo!")
			return;
		}
		if(nodoMinAll.value==""){
			scriviMessaggio(messaggioAllarme, "il campo MIN \xE8 vuoto, compilare il campo!")
			return;
		}
		//Errore per le stringhe non numeri;
		if(isNaN(valoreOraAll)){
			scriviMessaggio(messaggioAllarme, "il campo ORE non \xE8 un numero!")
			return;
		}
		if(isNaN(valoreMinAll)){
			scriviMessaggio(messaggioAllarme, "il campo MIN non \xE8 un numero!")
			//RETURN serve per stoppare il processo della funzione nel caso in cui si verifichi isNaN();
			return;
		}
		//Errore numeri minori di 0;
		if((nodoOraAll.value < 0) || (nodoMinAll.value < 0)){
			scriviMessaggio(messaggioAllarme, "Inserire campi MAGGIORI. di 0!")
			return;
		}
		//Errore numeri MAGGIORI di ore:23 o min:59;
		if(nodoOraAll.value>23){
			scriviMessaggio(messaggioAllarme, "Il numero inserito per le ORE \xE8 troppo grande (min:0 max:23)");
			return;
		}
		if(nodoMinAll.value>59){
			scriviMessaggio(messaggioAllarme, "Il numero inserito per i MIN \xE8 troppo grande (min:0 max:59)");
			return;
		}
		nodoReadAllarme.value= nodoOraAll.value+ ":" + nodoMinAll.value;
		scriviMessaggio(messaggioAllarme, "");
	}catch(e){
		alert("gestioneImpostaOraCorrente" + e);
	}
}
// BTN click evento avanza
function gestioneAvanza(){
	try{
		//Errore compilare o premere bottoni;
		if((nodoReadCorr.value=="") || (nodoReadAllarme.value=="")){
			scriviMessaggio(messaggioAvanza, "Compilare tutti i campi e premere i bottoni 'IMPOSTA' per memorizzare i valori!")
			return;
		}
		scriviMessaggio(messaggioAvanza, "");
	
		if(nodoReadCorr.value != nodoReadAllarme.value){
			//Conteggio minuti a 59;
			if(valoreMin>=59){
				valoreOra++;
				valoreMin=0;
			}else{
				valoreMin++;
			}
			//Azzera valoreOra quando 24;	
			if(valoreOra>23){
				valoreOra=0;
			}
			//Aggiorna di '+1' solo il campo di readonly corrente;
			nodoReadCorr.value= valoreOra + ":" + valoreMin;
		}else{
			nodoSvaglia.value="SVEGLIAAA!!!"
		}
	}catch(e){	
		alert("gestioneAvanza" + e);	
	}
}
//Scrive messaggio errore dinamicamente;
function scriviMessaggio(nodo, messaggio){
	var nodoTesto=document.createTextNode(messaggio);
	nodo.replaceChild(nodoTesto, nodo.firstChild);
}
//Reset;
function gestioneReset(){
	gestioneLoad();
	scriviMessaggio(messaggioAllarme, "");
	scriviMessaggio(messaggioImposta, "");
	scriviMessaggio(messaggioAvanza, "");
}
window.onload=gestioneLoad;