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

$("button#display1").click(function(){
  $("body").removeClass();
  $("body").addClass("style1")
})

$("button#display2").click(function(){
  $("body").removeClass();
  $("body").addClass("style2")
})

$("button#displayC").click(function(){
  $("body").removeClass();
  $("body").addClass("styleC")
})






});
