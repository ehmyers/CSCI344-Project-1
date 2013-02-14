$(document).ready(function() {
	$('.carousel').carousel({
		interval: 2000;
	})

	setInterval(function() {
		$(".right").click();
	}, 500);
});