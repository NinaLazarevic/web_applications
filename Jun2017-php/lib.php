<?php
include 'Letovi.php';

function vratiAgenciju() {
    // funkcija za konektovanje na bazu podataka
    // parametri su server_baze, username, password, ime_baze
    $con = new mysqli("localhost", "root", "Mysiren8@", "jun");
    if ($con->connect_errno) {
        // u slucaju greske odstampati odgovarajucu poruku
        print ("Connection error (" . $con->connect_errno . "): $con->connect_error");
    }
    else {
        $agencija="";
        // $res je rezultat izvrsenja upita
        $res = $con->query("select * from agencija");
        if ($res) {
            
            // fetch_assoc() pribavlja jedan po jedan red iz rezulata 
			// u redosledu u kom ga je vratio db server
            while ($row = $res->fetch_assoc()) {
                
                $agencija=new Agencija($row['id'],$row['adresa'],$row['naziv']);

            }
            // zatvaranje objekta koji cuva rezultat
            $res->close();
           
        }
        else
        {
            print ("Query failed");
        }
        
        //letovi
          $res = $con->query("select * from letovanje where agencija_id=$agencija->id");
        if ($res) {

            while ($row = $res->fetch_assoc()) {
				
              $agencija->dodajLet(new Let($row['id'],$row['destinacija'],$row['zemlja'],$row['vrsta_usluge'],$row['cena'],$row['prevoz_ukljucen']));

            }
            // zatvaranje objekta koji cuva rezultat
            $res->close(); 
        }
        else
        {
            print ("Query failed");
        }
        
         return $agencija;
    }
}
function azurirajLetovanje(Let $let)
{
    $con = new mysqli("localhost", "root", "Mysiren8@", "jun");
    if ($con->connect_errno)
    {
        print ("Connection error (" . $con->connect_errno . "): $con->connect_error");
    }
    else
    {
        $res = $con->query("update letovanje set destinacija = '$let->destinacija', zemlja = '$let->zemlja', vrsta_usluge = '$let->vrsta_usluge', cena = '$let->cena',prevoz_ukljucen='$let->prevoz_ukljucen' where id = '$let->id '");
        if (!$res)
        {
            print ("Query failed");
        }
        return $res;
    }
}

?>
