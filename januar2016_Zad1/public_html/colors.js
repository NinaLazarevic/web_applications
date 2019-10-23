function Color(r, g, b)
{
    this.red=r;
    this.green=g;
    this.blue=b;
    
    this.vratiBoju=function()
    {
        return "rgb("+this.red+","+this.green+","+this.blue+")";
    }
}

function Kontrola()
{
    this.index=0;
    this.izabrana;
    this.prethodnoIzabranaID='none';
    var that=this;
    
    this.iscrtajKontrolu=function(cont,br)
    {
        if (cont == null) throw "Ne postoji parent element";
        
        var container= document.createElement("div");
        container.setAttribute("id",br);
        container.style.width="420px";
        container.style.height="420px";
      //  container.style.margin="auto";
        container.style.float="left";
        container.style.margin="20px";
        container.style.backgroundColor="#ecc6d8";
        container.style.position="relative";
        cont.appendChild(container);

        var boje=document.createElement("div");
        boje.style.width="98%";
        boje.style.height="80%";
        boje.style.marginLeft="1%";
        boje.style.top="3px";
        boje.style.position="absolute";
        boje.style.border="1px grey dashed";
        container.appendChild(boje);
        
        for(var i=0; i<8 ;i++)
        {
              var x = document.createElement("P");
               x.style.float="left";
               x.style.width="98%";
               x.style.height="11%";
               x.style.margin="2px";
               
               for(var j=0; j<8; j++ )
               {
                    var boja=document.createElement("div");
                    boja.setAttribute("id",br.toString()+i.toString()+j.toString());
                    boja.style.width="42px";
                    boja.style.height="98%";
                    boja.style.margin="3px";
                    boja.style.float="left";
                    var r=Math.floor(Math.random() * 255) + 1;
                    var g=Math.floor(Math.random() * 255) + 1;
                    var b=Math.floor(Math.random() * 255) + 1;
                    var bb=new Color(r,g,b);
                    boja.style.backgroundColor=bb.vratiBoju();
                   // boja.dataset.col=bb.vratiBoju();
                   boja.objColor=bb;
                   // boja.style.border="1px grey solid";
                   boja.onclick=function()
                   {
                       if(that.prethodnoIzabranaID != "none")
                       {
                         var pr=document.getElementById(that.prethodnoIzabranaID);
                         pr.style.border="none";
                       }
                       this.style.border="2px black solid";
                       that.izabrana=this.objColor;
                       //that.izabrana=this.dataset.col;
                       
                       var dug=document.getElementById(br+"fav");
                       dug.style.visibility = "visible";
                       that.prethodnoIzabranaID=this.id;
                       
                   }
                    x.appendChild(boja);
               }
               
               boje.appendChild(x);
        }
        
        var omiljene=document.createElement("div");
        omiljene.style.width="98%";
        omiljene.style.height="17%";
        omiljene.style.bottom="3px";
        omiljene.style.marginLeft="1%";
        omiljene.style.position="absolute";
        omiljene.style.border="1px grey dashed";
        container.appendChild(omiljene);

        var omiljeneBoje=document.createElement("div");
        omiljeneBoje.style.width="98%";
        omiljeneBoje.style.height="49%";
        omiljeneBoje.style.top="1px";
        omiljeneBoje.style.marginLeft="1%";
        omiljeneBoje.style.position="absolute";
      //  omiljeneBoje.style.backgroundColor="red";

        omiljene.appendChild(omiljeneBoje);

         for(var i=0; i<8; i++)
        {
            var boja=document.createElement("div");
            boja.setAttribute("id",br.toString()+i.toString());
            boja.style.width="42px";
            boja.style.height="97%";
            boja.style.margin="3px";
            boja.style.float="left";
            boja.style.backgroundColor="#f2d9e6";
            boja.style.border="1px grey solid";

            omiljeneBoje.appendChild(boja);

        }

        var dugmici=document.createElement("div");
        dugmici.style.width="98%";
        dugmici.style.height="49%";
        dugmici.style.bottom="1px";
        dugmici.style.marginLeft="1%";
        dugmici.style.position="absolute";
       // dugmici.style.backgroundColor="blue";

        omiljene.appendChild(dugmici);

        var dugme1=document.createElement("button");
        dugme1.setAttribute("id",br+"fav");
        dugme1.style.backgroundColor="#bf407d";
        dugme1.style.border="none";
        dugme1.innerHTML="Favorites";
        dugme1.style.left="0";
        dugme1.style.width="20%";
        dugme1.style.bottom="0";
        dugme1.style.position="absolute";
        dugme1.style.visibility = "hidden";

        dugme1.onmouseover=function()
        {
            this.style.backgroundColor="#862d58";
        }
        dugme1.onmouseout=function()
        {
            this.style.backgroundColor="#bf407d";
        }
        dugme1.onclick=function()
        {
            if(that.index==8){
                alert("Maksimalno je moguce sacuvati 8 boja.");
                return;
            }
            var om=document.getElementById(br.toString()+that.index.toString());
            om.style.backgroundColor=that.izabrana.vratiBoju();
            
            that.index++;
        }

        dugmici.appendChild(dugme1);

        var dugme2=document.createElement("button");
        dugme2.style.backgroundColor="#bf407d";
        dugme2.style.border="none";
        dugme2.innerHTML="OK";
        dugme2.style.right="0";
        dugme2.style.width="20%";
        dugme2.style.bottom="0";
        dugme2.style.position="absolute";

         dugme2.onmouseover=function()
        {
            this.style.backgroundColor="#862d58";
        }
        dugme2.onmouseout=function()
        {
            this.style.backgroundColor="#bf407d";
        }
        dugme2.onclick=function()
        {
            var container= document.getElementById(br);
            container.style.display="none";
        }
        dugmici.appendChild(dugme2);
        
    }
}
