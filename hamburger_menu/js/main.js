// When the user clicks the hamburger icon
  // Add the menu-open class to the nav links .nav-links
$('.hamburger').on('click', function(){
  $('.nav-links').addClass('menu-open');
  $('.nav-links').fadeIn(800);
  $('.close').addClass('close-open');
  $('.close').fadeIn(500);
});



// When the user clicks the close icon
  // Remove the menu-open class from the nav links .nav-links
$('.close').on('click', function(){
  $('.nav-links').fadeOut(800);
  $('.close').fadeOut(500);
});
