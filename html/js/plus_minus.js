
function plus(ouo,xouo,price){
    document.getElementById(ouo).value =parseInt(document.getElementById(ouo).value)+1; 
    document.getElementById(xouo).value=parseInt(price)*parseInt(document.getElementById(ouo).value);
    as()

}

function minus(ouo,xouo,price){
    document.getElementById(ouo).value =parseInt(document.getElementById(ouo).value)-1; 
    document.getElementById(xouo).value=parseInt(price)*parseInt(document.getElementById(ouo).value);
    as()
}


function as(){
    var t,m
    let z 
    var  y = document.getElementsByClassName("sumoo");
    m=0
    for(t=0 ; t < y.length ; t++){
        
        z=parseInt(y[t].value);
        if (isNaN(z)) 
        z = 0;
        m+=z;
        // alert( z );
       
    }
    document.getElementById("countMoney").value=m;
     console.log(m);
     
  }