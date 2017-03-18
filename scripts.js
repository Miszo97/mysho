var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = "pseudoStyles";
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	var className = "pseudoStyle" + UID.getNew();
	
	_this.className +=  " "+className; 
	
	_sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
};




function start(){

	loadComments();
	getColor();


	
}

function getColor(){


	var x = getCookie("color")
	
	
	var color="";

	if (x!=""){

		color = x;

	

	} else {

		color = getRandomColor();
		setCookie("color", color, 30);		

	}









}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

    
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}



function send() {



	var q = $("#comment").val();
	q = q.trim();
	$("#comment").val("");



	if (q !== "") {

		


	  
	   var w = getCookie('color');


	   
		     

	   $.post("sendcomment.php", {comment: '['+'"'+q+'"'+','+'"'+w+'"'+']'+','}, function(result){
        $("#demo").html(result);

        


    });
	   		var w = getCookie('color');
	   		var children = $("li").length;
	   
        	var ul = document.getElementById("ul");
			var li = document.createElement("li");
			li.setAttribute("id", children);
			li.pseudoStyle("before","color",w);		
			var child = document.createTextNode(q); 			
			li.appendChild(child); 	
			 ul.insertBefore(li, ul.childNodes[0]);




	if (q === "delete") {

		$("li").remove();
		$.ajax("delete.php");

	} 


} else { alert ("Napisz coś najepierw!!! ;)")}

}
   




function onlineComments (){

			


		   $.ajax({url: "comments.txt",  success: function(result){

	   
	   	
	   	result = result.replace(/,$/, "]");
       
        result = JSON.parse(result);

        //alert(result[3]); 

        var length = result.length;
        var children = $("li").length;

        var w = getCookie('color');


        if (length>children)

        {



		

        	var ul = document.getElementById("ul");
			var li = document.createElement("li");
			li.setAttribute("id", length);	
			li.pseudoStyle("before","color",w);	
			var child = document.createTextNode(result[length-1][0]); 			
			li.appendChild(child); 	
			 ul.insertBefore(li, ul.childNodes[0]);

		}
		


    } }); 
	
	

	

		   

			

	}

	


	$(document).keypress(function (e) {
    if (e.which == 13) {

        send();
        e.preventDefault();
    }
});





setInterval(onlineComments, 3000);


function count(){

	var txt = $("#comment").val();
	
	document.getElementById("counter").innerHTML = 144 - txt.length;	
}


function loadComments (){

		
		$("li").remove();

	

		   $.ajax({url: "comments.txt",  success: function(result){

	   
	   	
	   	result = result.replace(/,$/, "]");
       
        result = JSON.parse(result);

        //alert(result[3]); 

        var length = result.length;

		var w = getCookie('color');

		for (var i = 0 ; i<length; i++)  {

        	var ul = document.getElementById("ul");
			var li = document.createElement("li");	
			li.setAttribute("id", i);
			li.pseudoStyle("before","color",w);	
			var child = document.createTextNode(result[i][0]);

			li.appendChild(child); 	
			
			  ul.insertBefore(li, ul.childNodes[0]);

		}


    } }); 

}









