function Dan(){
    
    this.datum;
    this.temp;
    this.minTemp;
    this.maxTemp;
    this.padavine;
    this.jacinaVetra;
    this.vlaznostVazduha;
    
    this.postaviParametre=function(dat,tem,min,max,pad,jv,vv){
        this.datum=dat;
        this.temp=tem;
        this.jacinaVetra=jv;
        this.maxTemp=max;
        this.minTemp=min;
        this.padavine=pad;
        this.vlaznostVazduha=vv;
    }
    
}
function Kontrola(ngr,nzem,dwid,dheig)
{
    this.nazivZemlje;
    this.nazivGrada;
    this.dwidth;
    this.dheight;
    
    this.dani;
    this.indexPrikaza;
    this.i1;
    this.i2;
    this.i3;
    this.i4;
    
    var that=this;
    
    this.construct=function(){
        this.nazivZemlje=nzem;
        this.nazivGrada=ngr;
        this.dheight=dheig;
        this.dwidth=dwid;
        this.dani=[];
        this.indexPrikaza=0;
        this.i1=1;
        this.i2=2;
        this.i3=3;
        this.i4=4;
    }
    this.construct();
    
    this.iscrtajKontrolu=function(glavni){
        
        if(glavni==null) throw "Ne postoji parent element";
        glavni.innerHTML="";
        
        var container=document.createElement("div");
        container.style.width=this.dwidth;
        container.style.height=this.dheight;
        container.style.border="2px solid black";
        container.style.margin="30px";
        container.style.float="left";
        
        glavni.appendChild(container);
        
        var tabela=document.createElement("table");
        tabela.style.width="98%";
        tabela.style.height="98%";
        
        container.appendChild(tabela);
        
        var tabelaHead=document.createElement("thead");
        tabela.appendChild(tabelaHead);
        
         var row = document.createElement("tr");
        tabelaHead.appendChild(row);
        
        var pod=document.createElement("th");
        pod.innerHTML="Vreme za "+this.nazivGrada+", "+this.nazivZemlje;
        
        row.appendChild(pod);
        
        var navig=document.createElement("th");
        
        var btn1=document.createElement("button");
        btn1.style.width="10%";
        btn1.style.height="85%";
        btn1.innerHTML=">";
        btn1.style.float="right";
        btn1.style.backgroundColor="#ccccb3";
        btn1.onmouseover=function(){
             this.style.backgroundColor="#b8b894";
         }
        btn1.onmouseout=function(){
             this.style.backgroundColor="#ccccb3";
         }
         btn1.onclick=function(){
             if((that.i4+1)<10)
             {
                 that.indexPrikaza++;
                 that.i1++;
                 that.i2++;
                 that.i3++;
                 that.i4++;
                 
                 that.iscrtajKontrolu(glavni);
             }
         }
        
        navig.appendChild(btn1);
        
          var btn2=document.createElement("button");
        btn2.style.width="10%";
        btn2.style.height="85%";
        btn2.innerHTML="<";
        btn2.style.float="right";
        btn2.style.backgroundColor="#ccccb3";
        btn2.onmouseover=function(){
             this.style.backgroundColor="#b8b894";
         }
        btn2.onmouseout=function(){
             this.style.backgroundColor="#ccccb3";
         }
        btn2.onclick=function(){
             if((that.indexPrikaza-1)>-1)
             {
                 that.indexPrikaza--;
                 that.i1--;
                 that.i2--;
                 that.i3--;
                 that.i4--;
                 
                 that.iscrtajKontrolu(glavni);
             }
         }
        
        navig.appendChild(btn2);
        
        row.appendChild(navig);
        
        
        
       var tabelaTelo = document.createElement("tbody");
        
        tabela.appendChild(tabelaTelo);
        
         var row = document.createElement("tr");
        tabelaTelo.appendChild(row);
        
        var prikaz=document.createElement("td");
        
        //slika
        var slika=document.createElement("div");
        slika.style.width="48%";
        slika.style.height="90%";
        slika.style.float="left";
        var x = document.createElement("SPAN");
        if(this.dani[this.indexPrikaza].padavine=="sneg")
        {
            x.className="sneg";
        }
        if(this.dani[this.indexPrikaza].padavine=="kisa")
        {
            x.className="kisa";
        }
        if(this.dani[this.indexPrikaza].padavine=="oblacno")
        {
            x.className="oblacno";
        }
        if(this.dani[this.indexPrikaza].padavine=="suncano")
        {
            x.className="suncano";
        }
        slika.appendChild(x);
        prikaz.appendChild(slika);
        //podaci o danu
        var podaci=document.createElement("div");
        podaci.style.width="45%";
        podaci.style.height="90%";
        podaci.style.float="right";
        
        var labela=document.createElement("label");
        labela.style.fontSize="x-small";
        labela.innerHTML=this.dani[this.indexPrikaza].datum;
        podaci.appendChild(labela)
        var novi=document.createElement("br");
         podaci.appendChild(novi)
        var labela=document.createElement("label");
        labela.style.fontSize="x-small";
        labela.innerHTML=this.dani[this.indexPrikaza].temp;
        podaci.appendChild(labela);
         
         var novi=document.createElement("br");
         podaci.appendChild(novi)
        
        var labela=document.createElement("label");
        labela.style.fontSize="x-small";
        labela.innerHTML=this.dani[this.indexPrikaza].padavine;
          podaci.appendChild(labela);
         
         var novi=document.createElement("br");
         podaci.appendChild(novi);
         
          var labela=document.createElement("label");
          labela.style.fontSize="x-small";
        labela.innerHTML="Vetar: "+this.dani[this.indexPrikaza].jacinaVetra;
          podaci.appendChild(labela);
         
         var novi=document.createElement("br");
         podaci.appendChild(novi);
         
          var labela=document.createElement("label");
          labela.style.fontSize="x-small";
        labela.innerHTML="Vlaznost: "+this.dani[this.indexPrikaza].vlaznostVazduha;
        podaci.appendChild(labela);
        
        prikaz.appendChild(podaci);
         
         row.appendChild(prikaz);
         
         
         var pdani=document.createElement("td");
         row.appendChild(pdani);
         
         //ima ukupno 10 dana
         
         for(var i=0;i<4;i++)
         {
             var dan=document.createElement("div");
                dan.style.width="20%";
                dan.style.height="85%";
                dan.style.float="left";
                dan.style.marginLeft="3%";
                
                if(i==0)
                this.dodajPodatkeZaDan(dan,this.i1);
                if(i==1)
                this.dodajPodatkeZaDan(dan,this.i2);
                if(i==2)
                this.dodajPodatkeZaDan(dan,this.i3);
                if(i==3)
                this.dodajPodatkeZaDan(dan,this.i4);
                
                pdani.appendChild(dan);
         }
         
    }
    
    this.dodajPodatkeZaDan=function(dan,ind)
    {
         var labela=document.createElement("label");
                labela.style.fontSize="x-small";
                
                labela.innerHTML=this.dani[ind].datum;
                    dan.appendChild(labela);
                     var novi=document.createElement("br");
                    dan.appendChild(novi);
                    
                     var x = document.createElement("SPAN");
                        if(this.dani[ind].padavine=="sneg")
                        {
                            x.className="sneg";
                        }
                        if(this.dani[ind].padavine=="kisa")
                        {
                            x.className="kisa";
                        }
                        if(this.dani[ind].padavine=="oblacno")
                        {
                            x.className="oblacno";
                        }
                        if(this.dani[ind].padavine=="suncano")
                        {
                            x.className="suncano";
                        }
                        dan.appendChild(x);
                        
                         var labela=document.createElement("label");
                         labela.style.fontSize="xx-small";
                         
                         labela.innerHTML=this.dani[ind].minTemp+ " "+ this.dani[ind].maxTemp;
                         dan.appendChild(labela);
          
    }
    
}


