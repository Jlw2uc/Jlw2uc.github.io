$('form').on('submit', function (event) {
  event.preventDefault();

 var fullName = $('#name').val();
 var emailAddress = $('#email').val();

 console.log(fullName.length);
 // if full name.length is less than or equal to 1
 // add a class with a red border
 // display an error that says enter your full Name
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
