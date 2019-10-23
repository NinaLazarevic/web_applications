function Objekat(b,v,s,t)
{
    this.broj;
    this.vlasnik;
    this.brSpratova;
    this.tip;
    
    this.__construct=function()
    {
        this.broj=b;
        this.vlasnik=v;
        this.brSpratova=s;
        this.tip=t;
    }
    this.__construct();
    
//    this.vratiLevuPoziciju=function()
//    {
//        var res=(this.broj-1)*35;
//        res+=10;
//        return "'"+res+"px'";
//    }
}

function Ulica(n,g)
{
    this.naziv;
    this.grad;
    this.objekti;
    this.brojeviUlica;
    
    this.__construct=function(){
        this.naziv=n;
        this.grad=g;
        this.objekti=[];
        this.brojeviUlica=[];
    }
    this.__construct();
    this.dodajObjekat=function(o)
    {
        this.objekti.push(o);
    }
    
    this.izdvojiBrojeve=function()
    {
        var l=this.objekti.length;
        for(var i=0;i<l;i++)
        {
            this.brojeviUlica.push(parseInt(this.objekti[i].broj));
        }
        
        this.brojeviUlica.sort(function(a, b){return a-b});
    }
    this.izbrojiJavne=function(){
        
        var br=0;
        var l=this.objekti.length;
        for(var i=0;i<l;i++)
        {
            if(this.objekti[i].tip=="javni")
            {
                br++;
            }
        }
        return br;
    }
    this.izbrojiStambene=function(){
         var br=0;
        var l=this.objekti.length;
        for(var i=0;i<l;i++)
        {
            if(this.objekti[i].tip=="stambeni")
            {
                br++;
            }
        }
        return br;
    }
    this.izbrojiPoslovne=function(){
         var br=0;
        var l=this.objekti.length;
        for(var i=0;i<l;i++)
        {
            if(this.objekti[i].tip=="poslovni")
            {
                br++;
            }
        }
        return br;
    }
}


