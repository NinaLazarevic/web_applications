window.onload=function(){
    
   
    var cont=document.getElementById("container");
//    var container= document.createElement("div");
//    container.style.width="420px";
//    container.style.height="420px";
//  //  container.style.margin="auto";
//    container.style.float="left";
//    container.style.margin="20px";
//    container.style.backgroundColor="#ecc6d8";
//    container.style.position="relative";
//    cont.appendChild(container);
//    
//    var boje=document.createElement("div");
//    boje.style.width="98%";
//    boje.style.height="80%";
//    boje.style.marginLeft="1%";
//    boje.style.top="3px";
//    boje.style.position="absolute";
//    boje.style.border="1px grey dashed";
//    container.appendChild(boje);
//    
//    var omiljene=document.createElement("div");
//    omiljene.style.width="98%";
//    omiljene.style.height="17%";
//    omiljene.style.bottom="3px";
//    omiljene.style.marginLeft="1%";
//    omiljene.style.position="absolute";
//    omiljene.style.border="1px grey dashed";
//    container.appendChild(omiljene);
//    
//    var omiljeneBoje=document.createElement("div");
//    omiljeneBoje.style.width="98%";
//    omiljeneBoje.style.height="49%";
//    omiljeneBoje.style.top="1px";
//    omiljeneBoje.style.marginLeft="1%";
//    omiljeneBoje.style.position="absolute";
//  //  omiljeneBoje.style.backgroundColor="red";
//    
//    omiljene.appendChild(omiljeneBoje);
//    
//     for(var i=0; i<8; i++)
//    {
//        var boja=document.createElement("div");
//        boja.style.width="42px";
//        boja.style.height="97%";
//        boja.style.margin="3px";
//        boja.style.float="left";
//        boja.style.backgroundColor="#f2d9e6";
//        boja.style.border="1px grey solid";
//        
//        omiljeneBoje.appendChild(boja);
//        
//    }
//    
//    var dugmici=document.createElement("div");
//    dugmici.style.width="98%";
//    dugmici.style.height="49%";
//    dugmici.style.bottom="1px";
//    dugmici.style.marginLeft="1%";
//    dugmici.style.position="absolute";
//   // dugmici.style.backgroundColor="blue";
//    
//    omiljene.appendChild(dugmici);
//    
//    var dugme1=document.createElement("button");
//    dugme1.style.backgroundColor="#bf407d";
//    dugme1.style.border="none";
//    dugme1.innerHTML="Favorites";
//    dugme1.style.left="0";
//    dugme1.style.width="20%";
//    dugme1.style.bottom="0";
//    dugme1.style.position="absolute";
//    
//    dugme1.onmouseover=function()
//    {
//        this.style.backgroundColor="#862d58";
//    }
//    dugme1.onmouseout=function()
//    {
//        this.style.backgroundColor="#bf407d";
//    }
//    
//    dugmici.appendChild(dugme1);
//    
//    var dugme2=document.createElement("button");
//    dugme2.style.backgroundColor="#bf407d";
//    dugme2.style.border="none";
//    dugme2.innerHTML="OK";
//    dugme2.style.right="0";
//    dugme2.style.width="20%";
//    dugme2.style.bottom="0";
//    dugme2.style.position="absolute";
//    
//     dugme2.onmouseover=function()
//    {
//        this.style.backgroundColor="#862d58";
//    }
//    dugme2.onmouseout=function()
//    {
//        this.style.backgroundColor="#bf407d";
//    }
//    dugme2.onclick=function()
//    {
//        var container= document.getElementById("container");
//        container.style.display="none";
//    }
//    dugmici.appendChild(dugme2);
    
//     var boja=document.createElement("div");
//        boja.style.width="42px";
//        boja.style.height="900px";
//        boja.style.margin="3px";
//        boja.style.float="left";
//        boja.style.backgroundColor="#f2d9e6";
//        boja.style.border="1px grey solid";
//        
//        cont.appendChild(boja);
    
    this.prva=new Kontrola();
    this.druga=new Kontrola();
    
    this.prva.iscrtajKontrolu(cont,111);
    this.druga.iscrtajKontrolu(cont,222);
    
}


