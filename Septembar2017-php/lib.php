<?php
include 'Gradovi.php';
function vratiDrzavu() {
    
    // funkcija za konektovanje na bazu podataka
    // parametri su server_baze, username, password, ime_baze
    $con = new mysqli("localhost", "root", "Mysiren8@", "septembar");
    if ($con->connect_errno) {
        // u slucaju greske odstampati odgovarajucu poruku
        print ("Connection error (" . $con->connect_errno . "): $con->connect_error");
    }
    else {
        // $res je rezultat izvrsenja upita
        $drzava = "";
        
        $res = $con->query("select * from drzava");
        if ($res) {

            while ($row = $res->fetch_assoc()) {
				
              $drzava=new Drzava($row['id'],$row['oznaka'],$row['naziv']);

            }
            // zatvaranje objekta koji cuva rezultat
            $res->close(); 
        }
        else
        {
            print ("Query failed");
        }
        // gradove
         $res = $con->query("select * from grad where drzava_id=$drzava->id");
        if ($res) {

            while ($row = $res->fetch_assoc()) {
				
              $drzava->dodajGrad(new Grad($row['id'],$row['oznaka'],$row['naziv'],$row['broj_stanovnika'],$row['xx'],$row['yy']));

            }
            // zatvaranje objekta koji cuva rezultat
            $res->close(); 
        }
        else
        {
            print ("Query failed");
        }
        return $drzava;
    }
}

function dodajGrad(Grad $grad){
    
     $con = new mysqli("localhost", "root", "Mysiren8@", "septembar");
    if ($con->connect_errno)
    {
        print ("Connection error (" . $con->connect_errno . "): $con->connect_error");
    }
    else
    {
        $query_text = "INSERT INTO grad (oznaka,naziv,broj_stanovnika,xx,yy,drzava_id) VALUES ("
                . "'$grad->oznaka', '$grad->naziv', '$grad->broj_stanovnika' , '$grad->x', '$grad->y', '1')";
        $res = $con->query($query_text);
        if (!$res)
        {
            print ("Query failed");
        }
    }
}

?>
