<html>
    <head>
        <title>Letovanja</title>
         <meta charset="UTF-8">
         <style>
            table, th, td {
                border: 1px solid black;
                border-collapse: collapse;
            }
            th, td {
                padding: 5px;
                text-align: left;    
            }
            </style>
    </head>
    <body style="background-color: rosybrown">
        
        Agencija "[[$agencija->naziv]]" , [[$agencija->adresa]]
        <br>
        <form action="index.php" method="POST">
            
            <table>
                <tr>
                    <th>Destinacija</th> <th>Zemlja</th> <th>Vrsta usluge</th> <th>Cena</th> <th>Prevoz ukljucen</th> <th> </th>
                </tr>
                
                [[foreach name="loop" key=id item=let from=$letovi]]
                
                <tr>
                    <td>[[$let->destinacija]]  </td>
                    <td>[[$let->zemlja]]  </td>
                    <td>[[$let->vrsta_usluge]] </td>
                    <td>[[$let->cena]]  </td>
                    <td>[[if $let->prevoz_ukljucen]]DA [[else]]NE[[/if]]  </td>
                    <td> <input type="submit" name="[[$id]]" value="Izmeni"> </td>
                </tr>
                
                [[/foreach]]
                
            </table>
 
        </form>
        <br>
        <hr>
        [[if $izmena]]
        <form action="index.php" method="POST">
            
            <table>
                <tr>
                    <td>Destinacija</td> <td> <input type="text" name="dest" value="[[$letIzmena->destinacija]]"> </td>
                </tr>
                <tr>
                    <td>Zemlja</td> <td> <input type="text" name="zemlja" value="[[$letIzmena->zemlja]]" </td>
                </tr>
                <tr>
                    <td>Vrsta usluge</td>
                    <td>
                        <input type="radio" name="usluga" value="nocenje" [[if $letIzmena->vrsta_usluge == "nocenje"]] checked[[/if]] > nocenje
                        <input type="radio" name="usluga" value="polupansion" [[if $letIzmena->vrsta_usluge == "polupansion"]] checked[[/if]] > polupansion
                        <input type="radio" name="usluga" value="pansion" [[if $letIzmena->vrsta_usluge == "pansion"]] checked[[/if]] > pansion
                    </td>
                </tr>
                <tr>
                    <td>Cena</td>
                    <td>
                        <select name="cena">
                            [[for $cena=1 to 1000]]
                            <option value="[[$cena]]" [[if $letIzmena->cena == $cena]] selected[[/if]] > [[$cena]] </option>
                            [[/for]]
                        </select>
                    </td>
                </tr>
                <tr>
                    <td> </td>
                    <td>
                        <input type="checkbox" name="prevoz" value="Ukljucen" [[if $letIzmena->prevoz_ukljucen]]checked [[/if]]>
                    </td>
                </tr>
                <tr>
                    <td> <input type="hidden" name="zaAzur" value="[[$letIzmena->id]]" </td>
                    <td>
                        <input type="submit" name="prosledi" value="Prosledi">
                    </td>
                </tr>
            </table>
            
        </form>
        
        [[/if]]
    </body>
</html>