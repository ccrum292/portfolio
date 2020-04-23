console.log("workin");

$(document).ready(function(){
  console.log(`loding`)
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('.tabs').tabs();
  setButtonColHeight();
  darkTheme();
  $('.modal').modal();
  $('input#input_text, textarea#textarea2').characterCounter();
});


// $('.nav-item').css('background-color','blue');

// instance.set(3);

const setButtonColHeight = () => {
  let pictureColHeight = $(".img-col")[0].scrollHeight
  $(".button-col").css("height", pictureColHeight);
}



anime({
  targets: '.line-drawing-demo .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

const copyToClipboard = event => {
  console.log("button clicked")
  console.log(event);
  console.log($(event).text())
  // event.preventDefault();
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(event).text()).select();
  console.log($temp.val($(event).text()).select())
  document.execCommand("copy");
  $temp.remove();
  $(".modal-content").append(`<p>Success!</p>`)
}

$(".copy-button").click(() => copyToClipboard("#email-address"))


// API Calls

const postComments = () => {
  $.ajax("", {
    type: "POST",
    data: {

    }
  }).then(() => location.reload())
}

const getComments = () => {
  $.ajax("", {
    type: "GET",
    data: {

    }
  }).then()
}