$(document).ready(function(){
	var words= ["Programming","Table Tennis","Swimming","Hiking"];
	var i = 1;

	setInterval(function(){
		$("#word").text(words[i++]);
		if(i > 3){ i = 0;}
	},2000);
});

