window.onload=function(){
    
     var odigraoPrvi=0;
     var odigraoDrugi=0;
     
         var igraaa=new Igra("Septembarski rok","23.8.2017.","Elektronski fakultet Nis");

         var igrac1= new Igrac("Pera","Peric","23.5.1997.");
         var igrac2= new Igrac("Sima","Simic","6.8.1999.");
         
         igraaa.igrac1=igrac1;
         igraaa.igrac2=igrac2;
         
    var that=this;
     
    var zaglavlje = document.createElement("div");
    zaglavlje.style.width="98%";
    zaglavlje.style.height="10%";
   // zaglavlje.style.backgroundColor="red";
    zaglavlje.style.margin="1%";
    zaglavlje.style.textAlign="center";
    zaglavlje.innerHTML='"'+igraaa.naziv+'" - '+igraaa.datum+ ' - ' + igraaa.lokacija;
    //zaglavlje.style.paddingTop="20px";
    
    document.body.appendChild(zaglavlje);
    //glavni.appendChild(zaglavlje);
   
    var igra=document.createElement("div"); //podaci o igri
    igra.style.width="70%";
    igra.style.height="80%";
  //  igra.style.backgroundColor="blue";
    igra.style.float="left";
    
    var pobede=document.createElement("div"); //podaci o pobedama
    pobede.style.width="30%";
    pobede.style.height="80%";
 //   pobede.style.backgroundColor="brown";
    pobede.style.float="right";
    
    
    document.body.appendChild(igra);
    document.body.appendChild(pobede);
    
   // alert(igraaa.igrac1.ime);
    igraaa.iscrtajIgru(igra,pobede);
    igraaa.iscrtajPodatke(pobede);
    
//    var prvi=document.createElement("div"); //container za prvog igraca
//    prvi.style.width="98%";
//    prvi.style.height="40%";
//    prvi.style.marginLeft="1%";
//    
//    var prviIme=document.createElement("div");
//    prviIme.style.width="20%";
//    prviIme.style.height="90%";
//    //prviIme.style.paddingTop="9%"
//    prviIme.style.float="left";
//    prviIme.style.backgroundColor="brown";
//    prviIme.style.textAlign="right";
//    prviIme.innerHTML="blaa";
//    
//    var prviKocke=document.createElement("div");
//    prviKocke.style.width="60%";
//    prviKocke.style.height="90%";
//    prviKocke.style.backgroundColor="red";
//    prviKocke.style.float="left";
//   
//    
//    for(var i=0; i<5;i++)
//    {
//        var kocka= document.createElement("div");
//        kocka.style.width="17%";
//        kocka.style.height="50%";
//        kocka.style.marginLeft="2%";
//        kocka.style.marginTop="7%";
//        //kocka.style.top="25%";
//        kocka.style.backgroundColor="pink";
//        kocka.style.border="1px solid black";
//        kocka.style.float="left";
//        
//        prviKocke.appendChild(kocka);
//    }
//    
//    var prviDugme=document.createElement("div");
//    prviDugme.style.width="20%";
//    prviDugme.style.height="90%";
//    prviDugme.style.backgroundColor="green";
//    prviDugme.style.float="left";
//    
//    
//    prvi.appendChild(prviIme);
//    prvi.appendChild(prviKocke);
//    prvi.appendChild(prviDugme);
//    igra.appendChild(prvi);



    
       
        
        
    
        
        
}
