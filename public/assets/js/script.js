console.log("workin")

// document.addEventListener('DOMContentLoaded', function(event) {
//   console.log('loading')
//   var elems = document.querySelectorAll('.carousel');
//   var instances = M.Carousel.init(elems, options);
//   darkTheme();
// })

$(document).ready(function(){
  console.log(`loding`)
  // $('.carousel').carousel();
  $('.tabs').tabs();
  darkTheme();
});

$('.carousel.carousel-slider').carousel({
  // fullWidth: true,
  indicators: true
});

$('.nav-item').css('background-color','blue');

// instance.set(3);



