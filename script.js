$(document).ready(function(){
	
	$("#login-link").click(function() {
		$("#modal-container-login").show();
	});

	$("#signup-link").click(function() {
		$("#modal-container-signup").show();
	});
	
	$("#modal-overlay1").click(function() {
		$("#modal-container-login").hide();
	});

	$("#modal-overlay2").click(function() {
		$("#modal-container-signup").hide();
	});
	
	$("#modal-footer-login-enter").click(function() {
		$("#log-in-text").text("Logged in");
	});

	$("#modal-footer-signup-enter").click(function() {
		$("#log-in-text").text("Logged in");
	});

	$("#log-in-text").click(function() {
		$("#modal-container-login").show();
	});

	$("#modal-footer-login-cancel").click(function() {
		$("#modal-container-login").hide();
	});

	$("#modal-footer-signup-cancel").click(function() {
		$("#modal-container-signup").hide();
	});

	$("#navbar-gear-area").click(function() {
		$("#settings-dropdown").toggle();
	});

	$(".onep").hover(function() {
		$(".oneo").toggle();
	});

	$(".twop").hover(function() {
		$(".twoo").toggle();
	});

	$(".threep").hover(function() {
		$(".threeo").toggle();
	});

	$(".fourp").hover(function() {
		$(".fouro").toggle();
	});

	$(".fivep").hover(function() {
		$(".fiveo").toggle();
	});

	$(".sixp").hover(function() {
		$(".sixo").toggle();
	});

	$(".sevenp").hover(function() {
		$(".seveno").toggle();
	});

	$(".eightp").hover(function() {
		$(".eighto").toggle();
	});

	$(".ninep").hover(function() {
		$(".nineo").toggle();
	});

	$(".tenp").hover(function() {
		$(".teno").toggle();
	});

	var counter = 0;
	var margin = 0;

	$("#carousel-next").click(function() {
    	if (counter == 0) {
      		$("#carousel-prev").show();
      	} else if (counter == 1) {
      		$("#carousel-next").hide();
      	}
  	});

  	$("#carousel-prev").click(function() {
    	if (counter == 2) {
      		$("#carousel-next").show();
      	} else if (counter == 1) {
      		$("#carousel-prev").hide();
      	}
  	});

	$("#carousel-next").click(function() {
    	if (counter == 2) {
      		return false;
    	}
    	else {
    		counter += 1;
    		margin -=100;
    		$("#carousel").css("margin-left", margin + "%");
    	}
  	});

  	$("#carousel-prev").click(function() {
    	if (counter == 0) {
      		return false;
    	}
    	else {
    		counter -= 1;
    		margin +=100;
    		$("#carousel").css("margin-left", margin + "%");
    	}
  	});

});