function addizione (x, y) {
    if (y == 0) {
       return x;
    } else {
       return addizione(x, y -1) +1;
    }
}
function moltiplicazione (x, y) {
    if (y == 0) {
       return 0;
    } else {
       return addizione(moltiplicazione(x, y -1), x);
    }
}
function pot(x , y){
   if(x != 0 && y==0){
     return 1; 
   }
   if (x==0 && y!=0){
      return 0;
   }
   if(x!=0 && y!=0){
      for (var i=0; i<y-1; i++){
         return x*moltiplicazione(x,y);
      } 
   }
}
print (pot(3,3))