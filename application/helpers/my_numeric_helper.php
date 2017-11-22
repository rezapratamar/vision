<?php 

function format_rp($nom){
   $nom = number_format($nom, 0, ",", ".");
   return "Rp."." $nom";
}

function format_without_rp($nom){
   $nom = number_format($nom, 0, ",", ".");
   return  "$nom";
}
?>