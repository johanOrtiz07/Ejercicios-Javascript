var a;
var b;
var c;
var x1;
var x2;
var x;
var mostrar;
var mostrar2;
var d;

function ecuacion(){
    
     var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var c= document.getElementById("c").value;
     
    d=(b*b)-4*a*c;
    
    
    if(d<0){
        
  
        alert("no hay solucion real");
        
    }else{
    
   
        
        x1 = ((-1*-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);

        x2 = ((-1*-b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);
        
        
        mostrar= document.getElementById("resulta").value =x1;
        mostrar=parseFloat();
        
        mostrar2= document.getElementById("resulta2").value =x2;
        mostrar2=parseFloat();
        
      alert("resultado 1:"+x1);
    }return(false);
        
       
}


          
      

