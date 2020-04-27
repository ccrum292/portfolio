
const aboutAnime = () => {
  anime({
    targets: ".about-heading",
    translateX: 100,
    delay: 150,
    direction: "alternate",
    easing: 'easeInOutExpo'
  });
}

const projectAnime = () => {
  anime({
    targets: ".project-heading",
    translateX: -100,
    delay: 150,
    direction: "alternate",
    easing: 'easeInOutExpo'
  });
}

const commentsAnime = () => {
  anime({
    targets: ".comments-heading",
    translateX: 100,
    delay: 150,
    direction: "alternate",
    easing: 'easeInOutExpo'
  });
}

const calebCrumAnime = () => {
  console.log("anime")
  anime({
    targets: ".title-anime",
    scale: 1.5,
    rotate: '2turn',
    direction: "alternate",
    easing: 'easeInOutExpo',
    endDelay: 500,
  });
}