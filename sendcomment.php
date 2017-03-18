<?php


$q = $_POST['comment'];
echo $q;
$myfile = fopen("comments.txt", "a") or die("Unable to open file!");
$txt = $q;

fwrite($myfile, $txt);
fclose($myfile);


 ?>