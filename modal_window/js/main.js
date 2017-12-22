// Write your pseudo code here! HAPPY CODING!!\
$('.modal-background').hide();
$('.modal-content').hide();

$('#showModal').on('click', function(){
  $('.modal-background').show(800);
  $('.modal-content').show(800);
});

$('#close').on('click', function(){
  $('.modal-background').hide(800);
  $('.modal-content').hide(800);
});
