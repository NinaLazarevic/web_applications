window.onload=function(){
    
    
    var kont=new Kontrola("Vranje","Srbija","600px","200px");
    var kont2=new Kontrola("Vranje","Srbija","600px","200px");
    
    var dan1=new Dan();
    dan1.postaviParametre("22/9/17","12°C","8°C","15°C","sneg","14km/h","41%");
    kont.dani.push(dan1);
    kont2.dani.push(dan1);
    var dan2=new Dan();
    dan2.postaviParametre("23/9/17","16°C","10°C","19°C","oblacno","14km/h","41%");
    kont.dani.push(dan2);
    kont2.dani.push(dan2);
    var dan3=new Dan();
    dan3.postaviParametre("24/9/17","12°C","8°C","15°C","kisa","18km/h","41%");
    kont.dani.push(dan3);
    kont2.dani.push(dan3);
    var dan4=new Dan();
    dan4.postaviParametre("25/9/17","21°C","14°C","25°C","suncano","9km/h","41%");
    kont.dani.push(dan4);
    kont2.dani.push(dan4);
    var dan5=new Dan();
    dan5.postaviParametre("26/9/17","21°C","8°C","25°C","suncano","10km/h","41%");
    kont.dani.push(dan5);
    kont2.dani.push(dan5);
    var dan6=new Dan();
    dan6.postaviParametre("27/9/17","12°C","8°C","15°C","sneg","14km/h","41%");
    kont.dani.push(dan6);
    kont2.dani.push(dan6);
    var dan7=new Dan();
    dan7.postaviParametre("28/9/17","10°C","8°C","15°C","kisa","19km/h","41%");
    kont.dani.push(dan7);
    kont2.dani.push(dan7);
    var dan8=new Dan();
    dan8.postaviParametre("29/9/17","10°C","8°C","13°C","kisa","17km/h","41%");
    kont.dani.push(dan8);
    kont2.dani.push(dan8);
    var dan9=new Dan();
    dan9.postaviParametre("30/9/17","12°C","8°C","15°C","oblacno","14km/h","41%");
    kont.dani.push(dan9);
    kont2.dani.push(dan9);
    var dan10=new Dan();
    dan10.postaviParametre("1/10/17","16°C","8°C","17°C","oblacno","15km/h","41%");
    kont.dani.push(dan10);
    kont2.dani.push(dan10);
    
    
    var glavni=document.createElement("div");
    glavni.style.width="98%";
    glavni.style.height="50%";
    glavni.className="glavna";
    
    document.body.appendChild(glavni);
    
    var glavni2=document.createElement("div");
    glavni2.style.width="98%";
    glavni2.style.height="50%";
    glavni2.className="glavna";

    
    document.body.appendChild(glavni2);
    
    kont.iscrtajKontrolu(glavni);
    kont2.iscrtajKontrolu(glavni2);
    
    
    var sporedni=document.createElement("div");
    sporedni.className="sporedna";
    sporedni.innerHTML="Nije moguce prikazati kontrole zbog rezolucije.";
    document.body.appendChild(sporedni);
    
}


