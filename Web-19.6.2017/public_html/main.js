window.onload=function(){
    
    var glavni=document.createElement("div");
    glavni.style.width="500px";
    glavni.style.height="500px";
   // glavni.style.backgroundColor="red";
    glavni.style.margin="auto";
    glavni.style.overflow="auto";
    glavni.style.position="relative";
    
    
    var ulicaDiv=document.createElement("div");
    ulicaDiv.style.width="498px";
    ulicaDiv.style.height="300px";
    ulicaDiv.style.overflow="auto";
   // ulicaDiv.style.backgroundColor="blue";
    ulicaDiv.style.top='1px';
    ulicaDiv.style.left='1px';
    ulicaDiv.style.position='absolute';
    
    glavni.appendChild(ulicaDiv);
    
    
    var ulicaOpis=document.createElement("div");
    ulicaOpis.style.width="498px";
    ulicaOpis.style.height="198px";
    ulicaOpis.style.overflow="auto";
   // ulicaOpis.style.backgroundColor="brown";
    ulicaOpis.style.bottom='1px';
    ulicaOpis.style.left='1px';
    ulicaOpis.style.position="absolute";
    
    glavni.appendChild(ulicaOpis);
    
    document.body.appendChild(glavni);
    
    var ulica=new Ulica("Bulevar Nikole Tesle","Nis");
    var ulicaMaliDiv=document.createElement("div");
    ulicaMaliDiv.style.width="496px";
    ulicaMaliDiv.style.height="49px";
    ulicaMaliDiv.style.top="110px";
    ulicaMaliDiv.style.backgroundColor='rgb(200,200,200)';
//     var labela = document.createElement("label");
//     labela.innerHTML=ulica.naziv;
//     labela.style.marginLeft="190px";
//     labela.style.top="22px";
//     labela.style.position='absolute';
    ulicaMaliDiv.innerHTML=ulica.naziv;
   // ulicaMaliDiv.appendChild(labela);
    ulicaMaliDiv.style.textAlign="center";
    ulicaMaliDiv.style.position='absolute';
    ulicaMaliDiv.style.paddingTop="22px";
    ulicaMaliDiv.style.border="1px grey dashed";
    
    ulicaMaliDiv.onmouseover=function(){
        this.style.backgroundColor="rgb(180,180,180)"
    }
    ulicaMaliDiv.onmouseout=function()
    {
        this.style.backgroundColor="rgb(200,200,200)";
    }
    
    
    ulicaDiv.appendChild(ulicaMaliDiv);
    
    var gornjiDeo=document.createElement("div");
    gornjiDeo.style.width="498px";
    gornjiDeo.style.height="100px";
    gornjiDeo.style.top='1px';
   // gornjiDeo.style.backgroundColor='pink';
    gornjiDeo.style.position='absolute';
    ulicaDiv.appendChild(gornjiDeo);
    
    var donjiDeo=document.createElement("div");
    donjiDeo.style.width="498px";
    donjiDeo.style.height="103px";
    donjiDeo.style.bottom='3px';
  //  donjiDeo.style.backgroundColor='pink';
    donjiDeo.style.position='absolute';
    ulicaDiv.appendChild(donjiDeo);
    
    var obj1=new Objekat(7,"Lazar",3,"stambeni");
    var obj2=new Objekat(3,"Sasa",3,"poslovni");
    var obj3=new Objekat(8,"Lazar",3,"javni");
    var obj4=new Objekat(2,"Daniejla",3,"stambeni");
    var obj5=new Objekat(1,"Goca",5,"stambeni");
    var obj6=new Objekat(9,"Dejan",2,"stambeni");
    var obj7=new Objekat(5,"Dragan",6,"stambeni");
    var obj8=new Objekat(14,"Marija",3,"javni");
    var obj9=new Objekat(6,"Jovan",3,"poslovni");
    var obj10=new Objekat(11,"Ivana",3,"stambeni");
    
    ulica.dodajObjekat(obj1);
    ulica.dodajObjekat(obj2);
    ulica.dodajObjekat(obj3);
    ulica.dodajObjekat(obj4);
    ulica.dodajObjekat(obj5);
    ulica.dodajObjekat(obj6);
    ulica.dodajObjekat(obj7);
    ulica.dodajObjekat(obj8);
    ulica.dodajObjekat(obj9);
    ulica.dodajObjekat(obj10);
   
    ulica.izdvojiBrojeve();
    
    ulicaMaliDiv.onclick=function(){
        ulicaOpis.innerHTML="";
        var labela = document.createElement("label");
        labela.style.fontSize = "large";
        labela.innerHTML="Ukupan broj objekata: "+ ulica.objekti.length;
        ulicaOpis.appendChild(labela);
        var pr=document.createElement("br");
        ulicaOpis.appendChild(pr);
        var labela = document.createElement("label");
        labela.style.fontSize = "small";
        labela.innerHTML="Broj stambenih objekata: "+ ulica.izbrojiStambene();
        ulicaOpis.appendChild(labela);
        var pr=document.createElement("br");
        ulicaOpis.appendChild(pr);
        var labela = document.createElement("label");
        labela.style.fontSize = "small";
        labela.innerHTML="Broj poslovnih objekata: "+ ulica.izbrojiPoslovne();
        ulicaOpis.appendChild(labela);
        var pr=document.createElement("br");
        ulicaOpis.appendChild(pr);
        var labela = document.createElement("label");
        labela.style.fontSize = "small";
        labela.innerHTML="Broj javnih objekata: "+ ulica.izbrojiJavne();
        ulicaOpis.appendChild(labela);
    }
    
     var xg = document.createElement("P");
           xg.style.height = "40px";
          xg.style.width = "498px";
       //   x.style.backgroundColor='yellow';
          xg.style.bottom="0px";
          xg.style.position='absolute';
          gornjiDeo.appendChild(xg);
          
     var xd = document.createElement("P");
           xd.style.height = "40px";
          xd.style.width = "498px";
       //   x.style.backgroundColor='yellow';
          xd.style.top="0px";
          xd.style.position='absolute';
          donjiDeo.appendChild(xd);
    var br=ulica.objekti.length;
    for(var i=0;i<br;i++)
    {
        var o="";
        for(var j=0;j<br;j++)
        {
            if(ulica.brojeviUlica[i]==ulica.objekti[j].broj)
            {
                o=ulica.objekti[j];
            }
        }
        var obj=document.createElement('div');
        obj.style.height="30px";
        obj.style.width="47px";
        
        if(o.tip=="stambeni")
        {
            obj.style.backgroundColor='plum';
        }else{
            if(o.tip=="javni"){
                obj.style.backgroundColor='PaleVioletRed';
            }else{
                obj.style.backgroundColor='LightSalmon ';
            }
        }
        
        //var posLeft=((ulica.objekti[i].broj-1)*35) + 10;
        //console.log(posLeft);
//        var p=ulica.objekti[i].vratiLevuPoziciju();
//        obj.style.left=p;
//        console.log(p);
        obj.style.float="left";
        obj.style.marginLeft='10px';
        obj.innerHTML=o.broj;
        obj.style.textAlign="center";
        obj.style.paddingTop='10px';
        obj.style.border="1px grey solid";
       // obj.style.postition="absolute";
       
        obj.dataset.info="Broj: "+o.broj+" \nVlasnik: "+o.vlasnik+"\nBroj spratova: "+o.brSpratova+ "\nTip: "+o.tip;
        obj.onclick=function()
        {
            alert(this.dataset.info);
        }
        obj.onmouseover=function(){
            this.style.border="2px black solid";
        }
        obj.onmouseout=function(){
            this.style.border="1px grey solid";
        }
       var a=o.broj/2;
       var b=Math.floor(a);
       if(a==b){
         xd.appendChild(obj);
     }else{
         xg.appendChild(obj);
     }
        
    }
    
}


