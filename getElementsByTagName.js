function conta(){
   var collezione =document.getElementsByTagName("textarea");
   var conta=0;
   for(var i=0; i< collezione.length; i++){
      conta++;
   }
   return conta;
}
print(conta())