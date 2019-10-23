<?php

class Grad{
    public $id;
    public $oznaka;
    public $naziv;
    public $broj_stanovnika;
    public $x;
    public $y;
    public $cekiran;
    
    function __construct($id,$oz,$na,$br_st,$xx,$yy) {
        $this->id=$id;
        $this->broj_stanovnika=$br_st;
        $this->naziv=$na;
        $this->oznaka=$oz;
        $this->x=$xx;
        $this->y=$yy;
        
        $this->cekiran=false;
    }
}

class Drzava{
    public $id;
    public $oznaka;
    public $naziv;
    
    public $gradovi;
    
    function __construct($id,$oz,$na) {
        $this->naziv=$na;
        $this->oznaka=$oz;
        $this->id=$id;
        
        $this->gradovi=array();
    }
    
    function dodajGrad(Grad $gr){
        array_push($this->gradovi, $gr);
    }
}

?>

