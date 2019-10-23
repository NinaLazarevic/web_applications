window.onload=function(){
    
    this.lista=document.getElementById("lista");
    this.lista.style.width="49%";
    this.lista.style.height="98%";
   // this.lista.style.top="0";
   // this.lista.style.marginLeft="15%";
   // this.lista.style.overflow="auto";
    this.lista.style.float="left";
   // this.lista.style.backgroundColor="red";
    
    this.korpa=document.getElementById("korpa");
    this.korpa.style.width="49%";
    this.korpa.style.height="98%";
   // this.korpa.style.bottom="0";
  //  this.korpa.style.marginLeft="15%";
  //  this.korpa.style.overflow="auto";
    this.korpa.style.float="right";
   // this.korpa.style.backgroundColor="blue";
    
    this.proizvodi = new Kupovina();
    this.proizvodi.iscrtajTabeluZaOdabrane(this.korpa,6);
    this.proizvodi.iscrtajTabeluZaProizvode(this.lista,6);
    
    this.p1=new Proizvod("354sa","cokolada","145");
    this.p2=new Proizvod("fs7qa","mleko","89");
    this.p3=new Proizvod("fs9f4","keks","65");
    this.p4=new Proizvod("73bss","kafa","120");
    this.p5=new Proizvod("hws78","jaja","12");
    
    this.proizvodi.dodajProizvod(p1);
    this.proizvodi.dodajProizvod(p2);
    this.proizvodi.dodajProizvod(p3);
    this.proizvodi.dodajProizvod(p4);
    this.proizvodi.dodajProizvod(p5);
    
    this.proizvodi.popuniListu();
    
    
    
}


