
//Grow
$("#button1").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//Blue
$("#button2").on("click", function() {
	$("#box").css("background-color", "blue");
})

//Fade
$("#button3").on("click", function() {
	$("#box").fadeTo("slow", 0.2);
})

//Reset
$("#button4").on("click", function() {
	$("#box").css({
		"height": "150px", 
		"width": "150px",
		"background-color": "orange",
		"margin":"25px",
		"opacity":"1"
	});
})