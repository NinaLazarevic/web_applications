<?php
include 'lib.php';
include 'MySmarty.php';

session_start();

$brojCekiranih=0;
$prikaz_rastojanja=false;
$nemoguc_prikaz=false;
$prvi_grad="";
$drugi_grad="";
$rastojanje=0;

if(isset ($_POST['dodaj']))
{
    $novi=new Grad(0, $_POST['oznaka'], $_POST['naziv'], $_POST['br_stanovnika'], $_POST['x'], $_POST['y']);
    dodajGrad($novi);
    
    $drzava=vratiDrzavu();
    $_SESSION['drzavaa']=$drzava;
}
else{
    if(isset($_POST['rastojanje']))
    {
        $drzava=$_SESSION['drzavaa'];
        
        foreach($drzava->gradovi as $id=>$grad)
        {
            if(isset($_POST[$id]))
            {
                $brojCekiranih++;
            }
        }
        if($brojCekiranih != 2){
    
            $nemoguc_prikaz=true;
            foreach($drzava->gradovi as $id=>$grad)
            {
                if(isset($_POST[$id]))
                {
                    $grad->cekiran=true;
                }
                else{
                     $grad->cekiran=false;
                }
            }
        }else{
             $prikaz_rastojanja=true;
             
              foreach($drzava->gradovi as $id=>$grad)
                {
                    if(isset($_POST[$id]))
                    {
                        $grad->cekiran=true;
                        $brojCekiranih--;
                        if($brojCekiranih==1)
                        {
                            $prvi_grad=$grad;
                        }
                        if($brojCekiranih==0){
                            $drugi_grad=$grad;
                        }
                    }else{
                        $grad->cekiran=false;
                    }
                }
               $rastojanje= sqrt(pow(($prvi_grad->x - $drugi_grad->x),2 ) + pow(($prvi_grad->y - $drugi_grad->y),2 ) );
             $_SESSION['drzavaa']=$drzava;
        }
   
    }else{
        //UCITAVANJE STRANE PRVI PUT
     $drzava=vratiDrzavu();
     $_SESSION['drzavaa']=$drzava;
    }
    
    
}

$broj_gradova= count($drzava->gradovi);

$smarty = new MySmarty();
$smarty->assign("drzava", $drzava);
$smarty->assign("broj_gradova", $broj_gradova);
$smarty->assign("nizGradova",$drzava->gradovi);
$smarty->assign("prikaz_rastojanja", $prikaz_rastojanja);
$smarty->assign("prvi_grad", $prvi_grad);
$smarty->assign("drugi_grad", $drugi_grad);
$smarty->assign("rastojanje", $rastojanje);
$smarty->assign("nemoguc_prikaz", $nemoguc_prikaz);
$smarty->display('index.tpl');

?>
