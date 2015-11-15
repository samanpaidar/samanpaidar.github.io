
$(document).ready(function() {

	$("#k1").click(function(){
		$(".imageholder img").attr({src:"hamber4.jpg"})
	})
$("#k2").click(function(){
		$(".imageholder img").attr({src:"delivery.jpg"})
	})
$("#k3").click(function(){
		$(".imageholder img").attr({src:"map.jpg"})
	})

 $("button").click(function (){
 	
 	$("div.buttom").toggleClass("top");
 })
        
});

function again(){
	location.reload();
}