$(document).ready(function(){
	var count = 1;
	document.getElementById("dotBefore" + count).src="pic/dot2.jpg";

//	setInterval(autoSlide, 8000);

	for(let i = 1; i < 8; i ++){
		$("#dotBefore" + i).click(function(){
			$("#slidePic").fadeOut(300,function(){
	            $("#slidePic").css("background-image", "url(pic/mn" + (i) + ".jpg)");
    	        console.log(count);
        	}).fadeIn(300);
			initdot();
			document.getElementById("dotBefore" + i).src="pic/dot2.jpg";
			count = i;
		});
	}

	$("#rightArrow").click(function(){
		count++;
		if(count > 7){count = 1;console.log("nie");}
		$("#slidePic").fadeOut(300,function(){
			$("#slidePic").css("background-image", "url(pic/mn" + (count) + ".jpg)");
			console.log(count);
		}).fadeIn(300);
		console.log(count);
		initdot();
		document.getElementById("dotBefore" + (count)).src="pic/dot2.jpg";
//		clearInterval(autoSlide);
	});

	$("#leftArrow").click(function(){
		count--;
		if(count < 1){count = 7;console.log("diu");}
		$("#slidePic").fadeOut(300,function(){
            $("#slidePic").css("background-image", "url(pic/mn" + (count) + ".jpg)");
			console.log(count);
        }).fadeIn(300);
		console.log(count);
		initdot();
		document.getElementById("dotBefore" + (count)).src="pic/dot2.jpg";
//		clearInterval(autoSlide);
	});
});
/*
function autoSlide(){
	if(count > 6){count = 0;}
	$("#slidePic").fadeOut(300,function(){
		$("#slidePic").css("background-image", "url(pic/mn" + (++count) + ".jpg)");
		console.log(count);
		initdot();
        document.getElementById("dotBefore" + (count+1)).src="pic/dot2.jpg";
        clearInterval(autoSlide);
	}).fadeIn(300);		
}
*/

function initdot(){
	for(let i = 1; i < 8; i++){
		document.getElementById("dotBefore" + i).src="pic/dot1.png";
	}
}
