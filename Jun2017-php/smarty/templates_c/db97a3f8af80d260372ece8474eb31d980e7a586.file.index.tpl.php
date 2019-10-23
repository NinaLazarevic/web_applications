<?php /* Smarty version Smarty-3.1.13, created on 2017-09-25 00:21:35
         compiled from "tpl\index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:17159599bb51664f8b2-28839053%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'db97a3f8af80d260372ece8474eb31d980e7a586' => 
    array (
      0 => 'tpl\\index.tpl',
      1 => 1506298894,
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
    'agencija' => 0,
    'letovi' => 0,
    'let' => 0,
    'id' => 0,
    'izmena' => 0,
    'letIzmena' => 0,
    'cena' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_599bb5176b2c75_53092785')) {function content_599bb5176b2c75_53092785($_smarty_tpl) {?><html>
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
        
        Agencija "<?php echo $_smarty_tpl->tpl_vars['agencija']->value->naziv;?>
" , <?php echo $_smarty_tpl->tpl_vars['agencija']->value->adresa;?>

        <br>
        <form action="index.php" method="POST">
            
            <table>
                <tr>
                    <th>Destinacija</th> <th>Zemlja</th> <th>Vrsta usluge</th> <th>Cena</th> <th>Prevoz ukljucen</th> <th> </th>
                </tr>
                
                <?php  $_smarty_tpl->tpl_vars['let'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['let']->_loop = false;
 $_smarty_tpl->tpl_vars['id'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['letovi']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['let']->key => $_smarty_tpl->tpl_vars['let']->value){
$_smarty_tpl->tpl_vars['let']->_loop = true;
 $_smarty_tpl->tpl_vars['id']->value = $_smarty_tpl->tpl_vars['let']->key;
?>
                
                <tr>
                    <td><?php echo $_smarty_tpl->tpl_vars['let']->value->destinacija;?>
  </td>
                    <td><?php echo $_smarty_tpl->tpl_vars['let']->value->zemlja;?>
  </td>
                    <td><?php echo $_smarty_tpl->tpl_vars['let']->value->vrsta_usluge;?>
 </td>
                    <td><?php echo $_smarty_tpl->tpl_vars['let']->value->cena;?>
  </td>
                    <td><?php if ($_smarty_tpl->tpl_vars['let']->value->prevoz_ukljucen){?>DA <?php }else{ ?>NE<?php }?>  </td>
                    <td> <input type="submit" name="<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
" value="Izmeni"> </td>
                </tr>
                
                <?php } ?>
                
            </table>
 
        </form>
        <br>
        <hr>
        <?php if ($_smarty_tpl->tpl_vars['izmena']->value){?>
        <form action="index.php" method="POST">
            
            <table>
                <tr>
                    <td>Destinacija</td> <td> <input type="text" name="dest" value="<?php echo $_smarty_tpl->tpl_vars['letIzmena']->value->destinacija;?>
"> </td>
                </tr>
                <tr>
                    <td>Zemlja</td> <td> <input type="text" name="zemlja" value="<?php echo $_smarty_tpl->tpl_vars['letIzmena']->value->zemlja;?>
" </td>
                </tr>
                <tr>
                    <td>Vrsta usluge</td>
                    <td>
                        <input type="radio" name="usluga" value="nocenje" <?php if ($_smarty_tpl->tpl_vars['letIzmena']->value->vrsta_usluge=="nocenje"){?> checked<?php }?> > nocenje
                        <input type="radio" name="usluga" value="polupansion" <?php if ($_smarty_tpl->tpl_vars['letIzmena']->value->vrsta_usluge=="polupansion"){?> checked<?php }?> > polupansion
                        <input type="radio" name="usluga" value="pansion" <?php if ($_smarty_tpl->tpl_vars['letIzmena']->value->vrsta_usluge=="pansion"){?> checked<?php }?> > pansion
                    </td>
                </tr>
                <tr>
                    <td>Cena</td>
                    <td>
                        <select name="cena">
                            <?php $_smarty_tpl->tpl_vars['cena'] = new Smarty_Variable;$_smarty_tpl->tpl_vars['cena']->step = 1;$_smarty_tpl->tpl_vars['cena']->total = (int)ceil(($_smarty_tpl->tpl_vars['cena']->step > 0 ? 1000+1 - (1) : 1-(1000)+1)/abs($_smarty_tpl->tpl_vars['cena']->step));
if ($_smarty_tpl->tpl_vars['cena']->total > 0){
for ($_smarty_tpl->tpl_vars['cena']->value = 1, $_smarty_tpl->tpl_vars['cena']->iteration = 1;$_smarty_tpl->tpl_vars['cena']->iteration <= $_smarty_tpl->tpl_vars['cena']->total;$_smarty_tpl->tpl_vars['cena']->value += $_smarty_tpl->tpl_vars['cena']->step, $_smarty_tpl->tpl_vars['cena']->iteration++){
$_smarty_tpl->tpl_vars['cena']->first = $_smarty_tpl->tpl_vars['cena']->iteration == 1;$_smarty_tpl->tpl_vars['cena']->last = $_smarty_tpl->tpl_vars['cena']->iteration == $_smarty_tpl->tpl_vars['cena']->total;?>
                            <option value="<?php echo $_smarty_tpl->tpl_vars['cena']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['letIzmena']->value->cena==$_smarty_tpl->tpl_vars['cena']->value){?> selected<?php }?> > <?php echo $_smarty_tpl->tpl_vars['cena']->value;?>
 </option>
                            <?php }} ?>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td> </td>
                    <td>
                        <input type="checkbox" name="prevoz" value="Ukljucen" <?php if ($_smarty_tpl->tpl_vars['letIzmena']->value->prevoz_ukljucen){?>checked <?php }?>>
                    </td>
                </tr>
                <tr>
                    <td> <input type="hidden" name="zaAzur" value="<?php echo $_smarty_tpl->tpl_vars['letIzmena']->value->id;?>
" </td>
                    <td>
                        <input type="submit" name="prosledi" value="Prosledi">
                    </td>
                </tr>
            </table>
            
        </form>
        
        <?php }?>
    </body>
</html><?php }} ?>