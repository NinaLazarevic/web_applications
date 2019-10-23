<?php
include 'lib.php';
include 'MySmarty.php';

//izmena u odnosu na zadatak, radi se sa hidden poljima,ne sa sesijama

$agencija=vratiAgenciju();
$izmena=false;
$letIzmena="";

if(isset($_POST['prosledi']))
{
    $prevoz=0;
    if(isset($_POST['prevoz']))
        $prevoz=1;
    $zaAzuriranje=new Let($_POST['zaAzur'], $_POST['dest'], $_POST['zemlja'], $_POST['usluga'], $_POST['cena'], $prevoz);
    
    azurirajLetovanje($zaAzuriranje);
    $agencija=vratiAgenciju();
}
else{
   
    foreach ($agencija->letovi as $id => $let) {
        
        if(isset($_POST[$id]))
        {
            $letIzmena=$let;
            $izmena=true;
        }
    }
    
}
$smarty = new MySmarty();
$smarty->assign("agencija", $agencija);
$smarty->assign("letovi", $agencija->letovi);
$smarty->assign("izmena", $izmena);
$smarty->assign("letIzmena", $letIzmena);
$smarty->display('index.tpl');
?>
