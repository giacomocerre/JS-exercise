var nodoCasella1;
var nodoCasella2;
var nodoCasella3;
var nodoCasella4;
var nodoCasella5;
var nodoCasella6;
var nodoCasella7;
var nodoCasella8;
var nodoCasella9;
var stop;
var mosse=0;
function gestoreLoad(){
	try{
		nodoCasella1=document.getElementById("casella1");
		nodoCasella2=document.getElementById("casella2");
		nodoCasella3=document.getElementById("casella3");
		nodoCasella4=document.getElementById("casella4");
		nodoCasella5=document.getElementById("casella5");
		nodoCasella6=document.getElementById("casella6");
		nodoCasella7=document.getElementById("casella7");
		nodoCasella8=document.getElementById("casella8");
		nodoCasella9=document.getElementById("casella9");
		//eventi
		nodoCasella1.onclick=gestoreGiocatore;
		nodoCasella2.onclick=gestoreGiocatore;
		nodoCasella3.onclick=gestoreGiocatore;
		nodoCasella4.onclick=gestoreGiocatore;
		nodoCasella5.onclick=gestoreGiocatore;
		nodoCasella6.onclick=gestoreGiocatore;
		nodoCasella7.onclick=gestoreGiocatore;
		nodoCasella8.onclick=gestoreGiocatore;
		nodoCasella9.onclick=gestoreGiocatore;
	}catch(e){
		alert("gestoreLoad" + e);
	}
}
function gestoreGiocatore(){
	try{
		if(stop){
			if (mosse%2==0){
				if(this.value=="."){
					this.value="X";
					this.style.color="#333";
					mosse++;
					gestoreVittoria();
				}
			}else{
				if(this.value=="."){
					this.value="O";
					this.style.color="#333";
					mosse++;
					gestoreVittoria();
				}
			}

		}
	}catch(e){
		alert("gestoreGiocatore" + e);
	}
}
function gestoreVittoria(){
	var contaX=0;
	var contaO=0;
	var contaX_vert=0;
	var contaO_vert=0;
	var gioc1="X";
	var gioc2="O";
	var matrice=[[nodoCasella1.value, nodoCasella2.value, nodoCasella3.value],
 				 [nodoCasella4.value, nodoCasella5.value, nodoCasella6.value],
 			     [nodoCasella7.value, nodoCasella8.value, nodoCasella9.value]];
 	//orizzontali;
 	for(var i=0;i<3;i++){
 		for(var j=0; j<3;j++){
 			if(gioc1==matrice[i][j]){
 				contaX++;
 				if(contaX==3){
 					stop=false;
 				}
 			}else{
 				contaX=0;
 			}
 			if(gioc2==matrice[i][j]){
 				contaO++;
 				if(contaO==3){
 					stop=false;
 					
 				}
 			}else{
 				contaO=0;
 			}
 		}
 	}
 	//verticali;
 	for(var i=0;i<3;i++){
 		for(var j=0; j<3;j++){
 			if(gioc1==matrice[j][i]){
 				contaX_vert++;
 				if(contaX_vert==3){
 					stop=false;
 				}
 			}else{
 				contaX_vert=0;
 			}
 			if(gioc2==matrice[j][i]){
 				contaO_vert++;
 				if(contaO_vert==3){
 					stop=false;
 				}
 			}else{
 				contaO_vert=0;
 			}
 		}
 	}
 	//obliquo;
 	if((matrice[0][0]=="X" && matrice[1][1]=="X" && matrice[2][2]=="X")||
 	  (matrice[0][0]=="O" && matrice[1][1]=="O" && matrice[2][2]=="O")){
 		stop=false;
 	}
 	if((matrice[0][2]=="X" && matrice[1][1]=="X" && matrice[2][0]=="X")||
 	  (matrice[0][2]=="O" && matrice[1][1]=="O" && matrice[2][0]=="O")){
 		stop=false;
 	}
}

window.onload=gestoreLoad;