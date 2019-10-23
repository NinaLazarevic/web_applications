<html>
    <head>
        <title>Gradovi</title>
         <meta charset="UTF-8">
         <style>

            th, td {
                padding: 5px;
                    
            }
            </style>
    </head>
    <body style="background-color: rosybrown">
        
        <form action="index.php" method="POST">
            
            <table>
                <tr>
                    <td>Oznaka</td> <td> <input type="text" name="oznaka"> </td>
                </tr>
                <tr>
                    <td>Naziv</td> <td> <input type="text" name="naziv"> </td>
                </tr>
                <tr>
                    <td>Broj stanovnika</td> <td> <input type="text" name="br_stanovnika"> </td>
                </tr>
                <tr>
                    <td>X</td> <td> <input type="text" name="x"> </td>
                </tr>
                <tr>
                    <td>Y</td> <td> <input type="text" name="y"> </td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="submit" name="dodaj" value="Dodaj grad u listu"> </td>
                </tr>
               
            </table>
  
        </form>
        
        <hr>
         <br>
         
         Drzava [[$drzava->naziv]], broj gradova u listi: [[$broj_gradova]]
         <br>
         
         <form action="index.php" method="POST">
             
             <table>
                 <tr>
                     <th>Oznaka</th> <th>Naziv</th> <td>Broj stanovnika</td> <td>X</td> <td>Y</td> <td> </td>
                 </tr>
                 
                 [[foreach name='loop' key=id item=grad from=$nizGradova]]
                 <tr>
                     <td>[[$grad->oznaka]]</td> <td>[[$grad->naziv]]</td> <td>[[$grad->broj_stanovnika]]</td>
                        <td>[[$grad->x]]</td> <td>[[$grad->y]]</td>
                        <td> <input type="checkbox" name="[[$id]]" value="[[$id]]"[[if $grad->cekiran]]checked [[/if]] > </td>
                 </tr>
                 [[/foreach]]
                 
                 <tr>
                     <td colspan="6"> <input type="submit" name="rastojanje" value="Prikazi rastojanje"> </td>
                 </tr>
                 
             </table>
             
         </form>
         
         <br>
         [[if $prikaz_rastojanja]]
               
            Rastojanje izmedju gradova [[$prvi_grad->naziv]] i [[$drugi_grad->naziv]] je [[$rastojanje]]
            
         [[/if]]
        
         [[if $nemoguc_prikaz]]
         
            Nije moguce prikazati rastojanje
            
         [[/if]]
         
    </body>
    
</html>