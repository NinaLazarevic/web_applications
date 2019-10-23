<?php /* Smarty version Smarty-3.1.13, created on 2017-09-24 19:42:30
         compiled from "tpl\index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:17159599bb51664f8b2-28839053%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'db97a3f8af80d260372ece8474eb31d980e7a586' => 
    array (
      0 => 'tpl\\index.tpl',
      1 => 1506282149,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '17159599bb51664f8b2-28839053',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_599bb5176b2c75_53092785',
  'variables' => 
  array (
    'drzava' => 0,
    'broj_gradova' => 0,
    'nizGradova' => 0,
    'grad' => 0,
    'id' => 0,
    'prikaz_rastojanja' => 0,
    'prvi_grad' => 0,
    'drugi_grad' => 0,
    'rastojanje' => 0,
    'nemoguc_prikaz' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_599bb5176b2c75_53092785')) {function content_599bb5176b2c75_53092785($_smarty_tpl) {?><html>
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
         
         Drzava <?php echo $_smarty_tpl->tpl_vars['drzava']->value->naziv;?>
, broj gradova u listi: <?php echo $_smarty_tpl->tpl_vars['broj_gradova']->value;?>

         <br>
         
         <form action="index.php" method="POST">
             
             <table>
                 <tr>
                     <th>Oznaka</th> <th>Naziv</th> <td>Broj stanovnika</td> <td>X</td> <td>Y</td> <td> </td>
                 </tr>
                 
                 <?php  $_smarty_tpl->tpl_vars['grad'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['grad']->_loop = false;
 $_smarty_tpl->tpl_vars['id'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['nizGradova']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['grad']->key => $_smarty_tpl->tpl_vars['grad']->value){
$_smarty_tpl->tpl_vars['grad']->_loop = true;
 $_smarty_tpl->tpl_vars['id']->value = $_smarty_tpl->tpl_vars['grad']->key;
?>
                 <tr>
                     <td><?php echo $_smarty_tpl->tpl_vars['grad']->value->oznaka;?>
</td> <td><?php echo $_smarty_tpl->tpl_vars['grad']->value->naziv;?>
</td> <td><?php echo $_smarty_tpl->tpl_vars['grad']->value->broj_stanovnika;?>
</td>
                        <td><?php echo $_smarty_tpl->tpl_vars['grad']->value->x;?>
</td> <td><?php echo $_smarty_tpl->tpl_vars['grad']->value->y;?>
</td>
                        <td> <input type="checkbox" name="<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
" value="<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
"<?php if ($_smarty_tpl->tpl_vars['grad']->value->cekiran){?>checked <?php }?> > </td>
                 </tr>
                 <?php } ?>
                 
                 <tr>
                     <td colspan="6"> <input type="submit" name="rastojanje" value="Prikazi rastojanje"> </td>
                 </tr>
                 
             </table>
             
         </form>
         
         <br>
         <?php if ($_smarty_tpl->tpl_vars['prikaz_rastojanja']->value){?>
               
            Rastojanje izmedju gradova <?php echo $_smarty_tpl->tpl_vars['prvi_grad']->value->naziv;?>
 i <?php echo $_smarty_tpl->tpl_vars['drugi_grad']->value->naziv;?>
 je <?php echo $_smarty_tpl->tpl_vars['rastojanje']->value;?>

            
         <?php }?>
        
         <?php if ($_smarty_tpl->tpl_vars['nemoguc_prikaz']->value){?>
         
            Nije moguce prikazati rastojanje
            
         <?php }?>
         
    </body>
    
</html><?php }} ?>