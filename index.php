<?php 
$txt = $_SERVER['REMOTE_ADDR'];
$myfile = fopen("ip.txt", "a") or die("Unable to open file!");


fwrite($myfile, $txt);
fclose($myfile);

?>


<!DOCTYPE html>
<html lang="pl">
	<head>

		<meta charset="utf-8"/>
		<title></title>
		<meta http-equiv="X-UA-Compatible" content="IE-edge,chrome=1"/>
		<link rel="stylesheet" href="style.css" type="text/css"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script type="text/javascript" src="scripts.js"></script>
		

		
	</head>

		<body onload="start()">
		

		<h3>Write a lot ;)</h3>

	
<div id="container">


	<div id="comment-box">
		<div id="comment-holder">
			<p id="counter">144</p>
			<textarea placeholder="write smth ;)" onkeyup="count()" maxlength="144" id="comment"></textarea>
		</div>

		<div onclick="send()" id="button"><br/><br/>Send</div>
		
	</div>

	<div id="comments-box">
		
	<ul id="ul">
		
	</ul>


	



	</div>
</div>


















		</body>

	</html>