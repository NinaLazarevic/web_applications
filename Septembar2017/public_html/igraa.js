function Igrac(im,pr,dat){
    this.ime;
    this.prezime;
    this.datum;
    this.brPobeda;
    this.kockice;
    
    this.__construct=function(){
        this.ime=im;
        this.prezime=pr;
        this.datum=dat;
        this.brPobeda=0;
        this.kockice=[];
        for(var i=0;i<5;i++)
        {
            this.kockice[i]=0;
        }
    }
   this.__construct();
}

function Igra(naz,dat,lok){
    this.naziv;
    this.datum;
    this.lokacija;
    
    this.igrac1;
    this.igrac2;
    
    var that=this;

    
    this.__construct=function(){
        this.naziv=naz;
        this.datum=dat;
        this.lokacija=lok;
    }
    this.__construct();
    
    
    this.iscrtajIgru=function(igra,pobede){
        
        if (igra == null) throw "Ne postoji parent element";
     
        igra.innerHTML="";
        
        var tabela=document.createElement("table");
        tabela.style.width="70%";
        tabela.style.height="80%";
        tabela.style.marginLeft="15%";
        tabela.style.marginTop="5%";
       // tabela.style.border="1px solid black";
        
        igra.appendChild(tabela);
        
        var tabelaTelo = document.createElement("tbody");
        
        tabela.appendChild(tabelaTelo);
        //prvi igrac
        var row = document.createElement("tr");
        tabelaTelo.appendChild(row);
        
        var cellImePrvi = document.createElement("td");
         cellImePrvi.innerHTML = that.igrac1.ime+" "+that.igrac1.prezime;
         cellImePrvi.style.width="20%";
         row.appendChild(cellImePrvi);
         
         var cellKockePrvi= document.createElement("td");
         that.kockicePrvi=cellKockePrvi;
             for(var i=0; i<5;i++)
            {
                var kocka= document.createElement("div");
                kocka.style.width="17%";
                kocka.style.height="50%";
                kocka.style.marginLeft="2%";
                kocka.style.paddingTop="5%";
                kocka.style.backgroundColor="pink";
                kocka.style.border="1px solid grey";
                kocka.style.float="left";
                kocka.innerHTML=that.igrac1.kockice[i].toString();
                kocka.style.textAlign="center";

                cellKockePrvi.appendChild(kocka);
            }
         row.appendChild(cellKockePrvi);
         
         var cellDugmePrvi=document.createElement("td");
         
         var dugme=document.createElement("button");
         dugme.style.height="28px";
         dugme.style.width="85%";
         dugme.innerHTML="Igraj";
         dugme.style.float="right";
         dugme.style.backgroundColor="#ccccb3";
         dugme.style.border="1px grey solid";
         
         dugme.onmouseover=function(){
             this.style.backgroundColor="#b8b894";
         }
         dugme.onmouseout=function(){
             this.style.backgroundColor="#ccccb3";
         }
         
         dugme.onclick=function(){
             
             if(that.odigraoPrvi==1)
             {
                 alert("Vec je odigran potez.");
             }
             else{
                 that.odigraoPrvi=1;

                   for(var i=0; i<5;i++)
                    {

                        var x = Math.floor(Math.random()*6 + 1);
                        that.igrac1.kockice[i]=x;

                    }
                 that.iscrtajIgru(igra,pobede);
             }
         }
         
         cellDugmePrvi.appendChild(dugme);
         
         row.appendChild(cellDugmePrvi);
         
         
         //drugi igrac
          var row = document.createElement("tr");
        tabelaTelo.appendChild(row);
        
        var cellImeDrugi = document.createElement("td");
         cellImeDrugi.innerHTML = that.igrac2.ime+" "+that.igrac2.prezime;
         cellImeDrugi.style.width="20%";
         row.appendChild(cellImeDrugi);
         
         var cellKockeDrugi= document.createElement("td");
         
             for(var i=0; i<5;i++)
            {
                var kocka= document.createElement("div");
                kocka.style.width="17%";
                kocka.style.height="50%";
                kocka.style.marginLeft="2%";
                kocka.style.paddingTop="5%";
                kocka.style.backgroundColor="pink";
                kocka.style.border="1px solid grey";
                kocka.style.float="left";
                kocka.innerHTML=that.igrac2.kockice[i].toString();
                kocka.style.textAlign="center";

                cellKockeDrugi.appendChild(kocka);
            }
         row.appendChild(cellKockeDrugi);
         
         var cellDugmeDrugi=document.createElement("td");
         
         var dugme=document.createElement("button");
         dugme.style.height="28px";
         dugme.style.width="85%";
         dugme.innerHTML="Igraj";
         dugme.style.float="right";
         dugme.style.backgroundColor="#ccccb3";
         dugme.style.border="1px grey solid";
         
         dugme.onmouseover=function(){
             this.style.backgroundColor="#b8b894";
         }
         dugme.onmouseout=function(){
             this.style.backgroundColor="#ccccb3";
         }
         
         dugme.onclick=function(){
             
             if(that.odigraoDrugi==1)
             {
                 alert("Vec je odigran potez.");
             }
             else{
                 that.odigraoDrugi=1;
                   for(var i=0; i<5;i++)
                    {
                        var x = Math.floor(Math.random()*6 + 1);
                        that.igrac2.kockice[i]=x;
                    }
                that.iscrtajIgru(igra,pobede); 
             }
         }
         
         cellDugmeDrugi.appendChild(dugme);
         
         row.appendChild(cellDugmeDrugi);
         
         //odredi pobednika
         
          var row = document.createElement("tr");
        tabelaTelo.appendChild(row);
        
        var cell1 = document.createElement("td");
         cell1.innerHTML = "";
         row.appendChild(cell1);
         
         var cell2= document.createElement("td");
         
           var dugme=document.createElement("button");
         dugme.style.height="28px";
         dugme.style.width="60%";
         dugme.style.float="right";
         dugme.innerHTML="Odredi pobednika";
         dugme.style.backgroundColor="#ccccb3";
         dugme.style.border="1px grey solid";
         
         dugme.onmouseover=function(){
             this.style.backgroundColor="#b8b894";
         }
         dugme.onmouseout=function(){
             this.style.backgroundColor="#ccccb3";
         }
         
         dugme.onclick=function(){
             

            
             if(that.odigraoPrvi==1 && that.odigraoDrugi==1)
             {
                 that.odigraoPrvi=0;
                 that.odigraoDrugi=0;
                 
                 var zbirPrvi=0;
                 var zbirDrugi=0;
                 
                 for(var i=0; i<5;i++)
                 {
                     zbirPrvi+=parseInt(that.igrac1.kockice[i]);
                     zbirDrugi+=parseInt(that.igrac2.kockice[i]);
                 }
                 if(zbirPrvi>zbirDrugi)
                 {
                     alert("Pobednik je prvi igrac "+that.igrac1.ime+ " "+ that.igrac1.prezime+ " sa zbirom poena od "+zbirPrvi);
                     that.igrac1.brPobeda++;
                     that.iscrtajPodatke(pobede);
                     
                 }
                 else{
                     if(zbirPrvi==zbirDrugi){
                         alert("Rezultat izjednacen");
                     }
                     else
                     {
                         alert("Pobednik je drugi igrac "+that.igrac2.ime+ " "+ that.igrac2.prezime+ " sa zbirom poena od "+zbirDrugi);
                         that.igrac2.brPobeda++;
                         that.iscrtajPodatke(pobede);
                     }
                 }
                 
             }
             else{
                 alert("Nisu svi igraci odirali potez");
             }
          
         }
         cell2.appendChild(dugme);
         
         row.appendChild(cell2);
         
         var cell3=document.createElement("td");
         cell3.innerHTML = "";
         row.appendChild(cell3);
      
         
         row.appendChild(cell3);
        
        
        
    }
    
    this.iscrtajPodatke=function(pobede)
    {
         if (pobede == null) throw "Ne postoji parent element";
            pobede.innerHTML="";
            
                      ///podaci o igri
        var podaci=document.createElement("div");
        podaci.style.width="80%";
        podaci.style.height="80%";
        podaci.style.marginLeft="10%";
        podaci.style.marginTop="11%";
        //podaci.style.border="1px dashed grey";
         var x = document.createElement("H3");
         var t = document.createTextNode("Trenutno stanje pobeda");
         x.appendChild(t);
         podaci.appendChild(x);
         
         var labela=document.createElement("label");
         labela.innerHTML=that.igrac1.ime+ " " + that.igrac1.prezime +":"+that.igrac1.brPobeda;
         podaci.appendChild(labela);
         
         var novi=document.createElement("br");
          podaci.appendChild(novi);

         
         var labela=document.createElement("label");
         labela.innerHTML=that.igrac2.ime+ " " + that.igrac2.prezime +":"+that.igrac2.brPobeda;
         
         podaci.appendChild(labela);
         pobede.appendChild(podaci);
         
         
    }
   
}