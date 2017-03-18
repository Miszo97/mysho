<?php


$myfile = fopen("comments.txt", "w") or die("Unable to open file!");
$txt = "[";
fwrite($myfile, $txt);
fclose($myfile);




 ?>