<?php

class Let{
    
    public $id;
    public $destinacija;
    public $zemlja;
    public $vrsta_usluge;
    public $cena;
    public $prevoz_ukljucen;
    
    function __construct($id,$des,$zem,$usl,$ce,$prev) {
        $this->cena=$ce;
        $this->destinacija=$des;
        $this->id=$id;
        $this->prevoz_ukljucen=$prev;
        $this->vrsta_usluge=$usl;
        $this->zemlja=$zem;
    }
    
}

class Agencija{
    public $id;
    public $adresa;
    public $naziv;
    
    public $letovi;
    
    function __construct($id,$adr,$na) {
        
        $this->naziv=$na;
        $this->adresa=$adr;
        $this->id=$id;
        
        $this->letovi=array();
    }
    
    function dodajLet($let)
    {
        array_push($this->letovi, $let);
    }
}

?>

