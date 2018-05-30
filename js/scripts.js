$(document).ready(function() {

$(".clickable").click(function() {
  $("#zoot-hidden").toggle();
  $("#zoot-shown").toggle();
  $("#more-zoot-parent").toggle();
});

$("#more-zoot").click(function(){
  $("#zoot-hidden").toggle();
  $("#extra-zoot").toggle();
  $("#more-zoot-parent").toggle();
})

$("#no-more-zoot").click(function(){
  $("#zoot-shown").toggle();
  $("#extra-zoot").toggle();
})






});
