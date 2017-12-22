// When the user scrolls in the browser window
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	// Step 2: Log distanceScrolled to the console to see what it holds!
	console.log(distanceScrolled);
  // if distanceScrolled is greater than or equal to 50
	if (distanceScrolled >= 50){
		$('nav').addClass('scrolled');
	}
	else {
		$('nav').removeClass('scrolled');
	}

	if (distanceScrolled >= 500) {
		$('.label-1, .label-2, .label-3').fadeIn(800);
	} else {
		$('.label-1, .label-2, .label-3').fadeOut(800);
	}
	if (distanceScrolled > 1400) {
		$('.butterfly').addClass('animated');
	} else {
		$('.butterfly').removeClass('animated');
	}
});
    // Add a class to the nav to update styles (give it a white background color)
  // else

	  // Remove the class from the nav to remove the background color

		//if the distanceScrolled is greater than or equal to 500 px
			//fade in the image of flybug in javascript
			//in css file add transition to it

		//if the distanceScrolled is greater than or equal to 1300 px
				//fade in the image of butterfly in javascript
				//in css file add transition to it
