    $(document).ready(function () {
      $("#pageloader").hide();
    });
// scroll
$(window).scroll(function() {    
   var scroll = $(window).scrollTop();
 
   if (scroll >= 50) {
       $("header").addClass("sticky");
   } else {
       $("header").removeClass("sticky");
   }
 });

//  menu active
$(".navbar .nav-link").on("click", function(){
   $(".navbar").find(".active").removeClass("active");
   $(this).addClass("active");
 });

//  disable inspect
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false;
  }
}

// hide collapse bar
$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});