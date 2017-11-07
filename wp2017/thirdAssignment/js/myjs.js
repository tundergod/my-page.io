$(document).ready(function(){
	$(".slide-pic").hide();
	$("#lol").hide();
	$("#text").hide();
	$('body').pointer();
	clickText();
	picSlide();
	text();

var ajaxtext = $("#try").val();

  $("#button").click(function(){
    console.log(ajaxtext);
    console.log("hello ajax")
    $.ajax({
      type: "GET",
      url: "/tryajax",
      data : ajaxtext,
      success: function(data) {
        $("#show").html(data);
      }
    })
  })
});

function text(){
	setInterval(function(){
		$("#text").show(function(){
			$("#text").fadeIn(100);
		});
	},700);
};
(function($){
	$.fn.pointer = function (options) {
		var settings = {
			size : 80,
			spd : 400,
			color : "purple"
		}
		settings = $.extend(settings, options);
		
		var circle_style = {
			"position":"absolute",
			"z-index":9999,
			"height":1,
			"width":1,
			"border":"solid 4px "+settings.color,
			"border-radius":settings.size
		}
		return this.each(function() {
			var $this = $(this);
			$this.css({"position":"relative"});
			$(document).click(function(e){
				var x = e.pageX-5;
				var y = e.pageY-10;
				
				var pos = {
					top :(-settings.size/2)+y,
					left :(-settings.size/2)+x
				}
		
				$this.append('<div class="circle"></div>');
				$this.find(".circle:last").css(circle_style).css({
					"top":y,
					"left":x
				}).animate({"height":settings.size,"width":settings.size,"left":pos.left,"top":pos.top},{duration:settings.spd,queue:false})
				.fadeOut(settings.spd*1.8,function(){
					$(this).remove();
				});
			});
		});
	}
})(jQuery);


function clickText(){
	$("#text").click(function(){
		if($(".slide-pic").is("visible"));
		else{
			$(".slide-pic").toggle("slide",{direction:"right"},1000);
			$("#lol").show(function(){
				$("#lol").fadeIn("slow");
			});
		}
	});
};

function picSlide(){
	$('.slide-pic').slick({
  		dots: true,
  		infinite: false,
  		speed: 800,
  		slidesToShow: 1,
		centerMode: false,
  		variableWidth: true,
		arrows:false
	});
};
/*
function picClick(){
	$("slide-pic").click(function(){
		$("#pic1").css({height:"+=10%",width:"+=10%"});
	});
};
*/
