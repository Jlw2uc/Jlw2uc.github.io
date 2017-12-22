//hide the images
$("img").hide();
//make a variable for currentimagenumber and set it to 0
var currentImage = 0;
var myVar = setInterval(function(){ myTimer() }, 1000);
$('img').eq(currentImage).fadeIn(300);
//when user clicks the next button
$('#next').on('click', function(){
  //hide current image
$('img').eq(currentImage).fadeOut(300);

if (currentImage === 3){
  currentImage = 0;
} else {
  currentImage++;
}
//fade in the currentimage photo using the .eq()
$('img').eq(currentImage).fadeIn(300);
});

//when the user clicks the previous button
$('#previous').on('click', function(){
//hide the currentimage
$('img').eq(currentImage).fadeOut(300);

if (currentImage === 0){
  currentImage = 3;
} else {
  currentImage--;
}
//fade in the currentimage photo using the .eq()
$('img').eq(currentImage).fadeIn(300);
});
