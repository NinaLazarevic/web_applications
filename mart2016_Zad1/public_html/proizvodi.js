function Proizvod(sifra,naziv,cena)
{
    this.sifra=sifra;
    this.naziv=naziv;
    this.cena=cena;
}
function Kupovina()
{
    this.nizProizvoda=[];
    this.nizOdabranih=[];
    
    this.brojPr;
    var that=this;
    
    this.dodajProizvod=function(pr)
    {
        this.nizProizvoda.push(pr);
    }
    
    this.odaberiProizvod= function(odabrani)
    {
        this.nizOdabranih.push(odabrani);
    }
    
    this.iscrtajTabeluZaProizvode=function(lista,brojProizvoda)
    {
        if(lista==null) throw "Ne postoji parent element.";
        this.brojPr=brojProizvoda;
        
        var labela = document.createElement("label");
        labela.innerHTML = "Lista proizvoda:";
        labela.style.margin="35%";
        lista.appendChild(labela);
        
        var novi=document.createElement("br");
        lista.appendChild(novi);
        
        var tabela=document.createElement("table");
        tabela.style.width="80%";
      //  tabela.style.height="90%";
        tabela.style.margin="auto";
        
        
        lista.appendChild(tabela);
        
        var tabelaHead = document.createElement("thead");
        tabela.appendChild(tabelaHead);
        var row = document.createElement("tr");
	tabelaHead.appendChild(row);
	var cell = document.createElement("th");
        cell.innerHTML = "Sifra";
	row.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = "Naziv";
	row.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = "Cena";
	row.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = "";
	row.appendChild(cell);
        
        var tabelaTelo = document.createElement("tbody");
        
	tabela.appendChild(tabelaTelo);
        
        for(var i = 0; i<brojProizvoda ; i++)
        {
            row = document.createElement("tr");
            
            tabelaTelo.appendChild(row);
            
            cell = document.createElement("td");
            cell.setAttribute("id","lsifra"+i.toString()); //lsifra1; lsifra2, lsifra3 ...
            cell.innerHTML = "";
            row.appendChild(cell);
            
            cell = document.createElement("td");
            cell.setAttribute("id","lnaziv"+i.toString()); //lnaziv1; lnaziv2, lnaziv3 ...
            cell.innerHTML = "";
            row.appendChild(cell);
            
            cell = document.createElement("td");
            cell.setAttribute("id","lcena"+i.toString()); 
            cell.innerHTML = "";
            row.appendChild(cell);
            
            cell = document.createElement("td");
            var btn = document.createElement("button");
            btn.setAttribute("id","l"+i.toString());
            btn.style.height="97%";
            btn.style.width="25px";
            btn.innerHTML= "+";
            btn.style.visibility = "hidden";
            btn.onclick=function()
            {
                //prebac iz niza u niz, ucitaj podatke u tabeli
                var ind= this.id;
                var inde= ind.charAt(1);
                var index = parseInt(inde);
                
                var proizvod=that.nizProizvoda[index];
                that.odaberiProizvod(proizvod);
                
                that.nizProizvoda.splice(index, 1); //splice f-ja ne ostavlja "prazna" mesta u nizu
                
                that.popuniKorpu();
                that.popuniListu();
                
            }
            cell.appendChild(btn);
            row.appendChild(cell);
            
        }
        
        //red za sumu
        row = document.createElement("tr");
        tabelaTelo.appendChild(row);
         
        cell = document.createElement("td");
        cell.colSpan = "2";
        cell.innerHTML = "Ukupna cena";
        row.appendChild(cell);
        
        cell = document.createElement("td");
        cell.setAttribute("id","lcena");
        //cell.innerHTML= this.izracunajUkupnuCenuListe();
        cell.innerHTML="";
        row.appendChild(cell);
        
        var novi=document.createElement("br");
        lista.appendChild(novi);
        
    }
    
    this.iscrtajTabeluZaOdabrane=function(korpa,brojProizvoda)
    {
        if(korpa==null) throw "Ne postoji parent element.";
        
//        var novi=document.createElement("br");
//        korpa.appendChild(novi);
//        
        var labela = document.createElement("label");
        labela.innerHTML = "Korpa:";
        labela.style.margin="45%";
        korpa.appendChild(labela);
        
        var novi=document.createElement("br");
        korpa.appendChild(novi);
        
        var tabela=document.createElement("table");
        tabela.style.margin="auto";
        tabela.style.width="80%";
      //  tabela.style.height="90%";
        
        korpa.appendChild(tabela);
        
        var tabelaHead = document.createElement("thead");
        tabela.appendChild(tabelaHead);
        var row = document.createElement("tr");
	tabelaHead.appendChild(row);
	var cell = document.createElement("th");
        cell.innerHTML = "Sifra";
	row.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = "Naziv";
	row.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = "Cena";
	row.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = "";
	row.appendChild(cell);
        
        var tabelaTelo = document.createElement("tbody");
	tabela.appendChild(tabelaTelo);
        
        for(var i = 0; i<brojProizvoda ; i++)
        {
            row = document.createElement("tr");
            
            tabelaTelo.appendChild(row);
            
            cell = document.createElement("td");
            cell.setAttribute("id","ksifra"+i.toString()); //ksifra1; ksifra2, ksifra3 ...
            cell.innerHTML = "";
            row.appendChild(cell);
            
            cell = document.createElement("td");
            cell.setAttribute("id","knaziv"+i.toString()); //knaziv1; knaziv2, knaziv3 ...
            cell.innerHTML = "";
            row.appendChild(cell);
            
            cell = document.createElement("td");
            cell.setAttribute("id","kcena"+i.toString()); 
            cell.innerHTML = "";
            row.appendChild(cell);
            
            cell = document.createElement("td");
            var btn = document.createElement("button");
            btn.setAttribute("id","k"+i.toString());
            btn.style.height="97%";
            btn.style.width="25px";
            btn.innerHTML= "-";
            btn.style.visibility = "hidden";
            btn.onclick=function()
            {
                //prebac iz niza u niz, ucitaj podatke u tabeli
                var ind= this.id;
                var inde= ind.charAt(1);
                var index = parseInt(inde);
                
                var proizvod=that.nizOdabranih[index];
                that.nizProizvoda.push(proizvod);
                
                that.nizOdabranih.splice(index, 1);
                
                that.popuniListu();
                that.popuniKorpu();
            }
            cell.appendChild(btn);
            row.appendChild(cell);
            
        }
        
        //red za sumu
        row = document.createElement("tr");
        tabelaTelo.appendChild(row);
         
        cell = document.createElement("td");
        cell.colSpan = "2";
        cell.innerHTML = "Ukupna cena";
        row.appendChild(cell);
        
        cell = document.createElement("td");
        cell.setAttribute("id","kcena");
        //cell.innerHTML= this.izracunajUkupnuCenuKorpe();
        cell.innerHTML="";
        row.appendChild(cell);
        
         var novi=document.createElement("br");
        korpa.appendChild(novi);
    }
    
    this.izracunajUkupnuCenuListe= function()
    {
        var cena=0;
        for(var i=0; i< this.nizProizvoda.length ; i++)
        {
            cena += parseInt(this.nizProizvoda[i].cena);
        }
        return cena;
    }
    
    this.izracunajUkupnuCenuKorpe= function()
    {
       var cena=0;
        for(var i=0; i< this.nizOdabranih.length ; i++)
        {
            cena += parseInt(this.nizOdabranih[i].cena);
        }
        return cena;
    }
    
    this.popuniListu=function()
    {
        this.ocistiListu();
        for(var i=0; i<this.nizProizvoda.length; i++)
        {
            var idSifra="lsifra"+i.toString();
            var kolSifra=document.getElementById(idSifra);
            kolSifra.innerHTML=this.nizProizvoda[i].sifra;
            
            var idNaziv="lnaziv"+i.toString();
            var kolNaziv=document.getElementById(idNaziv);
            kolNaziv.innerHTML=this.nizProizvoda[i].naziv;
            
            var idCena="lcena"+i.toString();
            var kolCena=document.getElementById(idCena);
            kolCena.innerHTML=this.nizProizvoda[i].cena;

            var idBtn="l"+i.toString();
            var kolBtn=document.getElementById(idBtn);
            kolBtn.style.visibility = "visible";
        }
                    
        var kolUkupna=document.getElementById("lcena");
        kolUkupna.innerHTML=this.izracunajUkupnuCenuListe();
       
    }
    
    this.ocistiListu=function()
    {
        for(var i=0; i<this.brojPr; i++)
        {
             var idSifra="lsifra"+i.toString();
            var kolSifra=document.getElementById(idSifra);
            kolSifra.innerHTML="";
            
            var idNaziv="lnaziv"+i.toString();
            var kolNaziv=document.getElementById(idNaziv);
            kolNaziv.innerHTML="";
            
            var idCena="lcena"+i.toString();
            var kolCena=document.getElementById(idCena);
            kolCena.innerHTML="";
            
            var idBtn="l"+i.toString();
            var kolBtn=document.getElementById(idBtn);
            kolBtn.style.visibility = "hidden";
        }
        var kolUkupna=document.getElementById("lcena");
        kolUkupna.innerHTML="";
    }
    
    this.popuniKorpu=function()
    {
        this.ocistiKorpu();
         for(var i=0; i<this.nizOdabranih.length; i++)
        {
            var idSifra="ksifra"+i.toString();
            var kolSifra=document.getElementById(idSifra);
            kolSifra.innerHTML=this.nizOdabranih[i].sifra;
            
            var idNaziv="knaziv"+i.toString();
            var kolNaziv=document.getElementById(idNaziv);
            kolNaziv.innerHTML=this.nizOdabranih[i].naziv;
            
            var idCena="kcena"+i.toString();
            var kolCena=document.getElementById(idCena);
            kolCena.innerHTML=this.nizOdabranih[i].cena;
            
            var idBtn="k"+i.toString();
            var kolBtn=document.getElementById(idBtn);
            kolBtn.style.visibility = "visible";
              
        }
        var kolUkupna=document.getElementById("kcena");
        kolUkupna.innerHTML=this.izracunajUkupnuCenuKorpe();
    }
    
    that.ocistiKorpu=function()
    {
          for(var i=0; i<this.brojPr; i++)
        {
            var idSifra="ksifra"+i.toString();
            var kolSifra=document.getElementById(idSifra);
            kolSifra.innerHTML="";
            
            var idNaziv="knaziv"+i.toString();
            var kolNaziv=document.getElementById(idNaziv);
            kolNaziv.innerHTML="";
            
            var idCena="kcena"+i.toString();
            var kolCena=document.getElementById(idCena);
            kolCena.innerHTML="";
            
            var idBtn="k"+i.toString();
            var kolBtn=document.getElementById(idBtn);
            kolBtn.style.visibility = "hidden";  
        }
        var kolUkupna=document.getElementById("kcena");
        kolUkupna.innerHTML="";
    }
}

