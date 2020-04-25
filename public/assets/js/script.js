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
  getComments();
  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });
  $('.tooltipped').tooltip();
  // $(".indicator-item").css('background-color','blue')
  // $(".indicator-item.active").css('background-color','black')
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

const postComments = (name, text) => {
  $.ajax("/api/comments", {
    type: "POST",
    data: {
      name: name.val().trim(),
      text: text.val().trim()
    }
  }).then(() => location.reload())
}

const getComments = () => {
  $.ajax("/api/comments", {
    type: "GET"
  }).then(data => {
    const commentsDiv = $(`
    <div style="margin-bottom: 50px" id="comments-div" class="row"></div>
    `);
    $("#main-container-body").append(commentsDiv);
    let cssStyleHeading = "alter-heading-4";
    let cssStyleText = "alter-text-4";
    data.forEach(val => {
      // it else statement used to change color of heading and text for each entry
      if(cssStyleHeading === "alter-heading-1"){
        cssStyleHeading = "alter-heading-2";
        cssStyleText = "alter-text-2";
      }else if(cssStyleHeading === "alter-heading-2"){
        cssStyleHeading = "alter-heading-3";
        cssStyleText = "alter-text-3";
      }else if(cssStyleHeading === "alter-heading-3"){
        cssStyleHeading = "alter-heading-4";
        cssStyleText = "alter-text-4";
      }else if(cssStyleHeading === "alter-heading-4"){
        cssStyleHeading = "alter-heading-1";
        cssStyleText = "alter-text-1";
      }
      $("#comments-div").prepend(`
      <div class="col s12 m12 l12 xl12">
        <h5 class="right-align ${cssStyleHeading}">${val.name}</h5>
        <p class="right-align ${cssStyleText}">${val.text}</p>
      </div>
      `)
    })
  })
}

const deleteComments = (id) => {
  $.ajax("", {
    type: "DELETE",
    data: {
      id: id
    }
  })
}

// Submit Comment Button

$("#submitComment").on("click", event => {
  event.preventDefault();
  postComments($("#input_text"), $("#textarea2"));
})

// styling

$(".indicator-item").css('background-color','blue')
$(".indicator-item.active").css('background-color','black')

// TRYING to fix weird bug with nav tabs
// $(".tab").on("click", event => {
//   event.preventDefault();
//   console.log("hit")
//   $(".click-me").click();
// })