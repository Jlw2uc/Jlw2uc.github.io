
//display error message on Form
$('form').on('submit', function (event) {
  event.preventDefault();

 var fullName = $('#name').val();
 var emailAddress = $('#email').val();

 if (fullName.length <= 1){
   $('#name').addClass('error');
   $('#nameerror').fadeIn('800');
 } else {
   $('#name').removeClass('error');
   $('#nameerror').fadeOut('800');
 }
 if (emailAddress.length <= 1){
   $('#email').addClass('error');
   $('#emailerror').fadeIn('800');
 } else {
   $('#email').removeClass('error');
   $('#emailerror').fadeOut('800');
 }

});

//make a scrolled nav with if else statements
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	if (distanceScrolled > 40) {
		$('nav').addClass('scrolled');
	} else {
		$('nav').removeClass('scrolled');
	}

});
