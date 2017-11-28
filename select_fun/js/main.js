$('header').on('click',function(){
  $('header').slideUp(300);
});

$("#party-time").on('click',function(){
  $('#boxes').removeClass('boring');
  $('#row4 div').fadeOut(300);
  $('.box').addClass('snazzy');
  $("#box3 span").addClass('fun');
  $('h2').slideUp(200);
  $('#row3 div').addClass('selected');
  $('.add-para').append('<p>Time to party!!!</p>');
  $('#box12').prepend('<h4>Wild!</h4>');
});

$("#box2 a").on('click',function(){
  $('footer').fadeIn(800);
});

$('#reset').on('click',function(){
  $('header').slideDown(300);
  $('footer').fadeOut(500);
  $('#row4 div').fadeIn(300);
  $('#boxes').addClass('boring');
  $('body').removeClass('snazzy');
  $('#box3 span').removeClass('fun');
  $('#row3 div').removeClass('selected');
  $('h2').slideDown(500);
  $( 'p' ).remove( ':contains("Time to party!!!")' );
  $( 'h4' ).remove( ':contains("Wild!")' );
});
