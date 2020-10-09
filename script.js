const rotMess = document.querySelector('.rotate-message');
const zoomer = document.getElementById('zoomContainer');
const animateButt = document.getElementById('slideButt');
let cards = document.querySelector('.cards');
let isOpen = false;
let opentl = anime.timeline({
    easing: 'easeOutCirc',
    autoplay: false,
    duration: 1500
  });
  
opentl
.add({
  targets: zoomer,
  keyframes: [
    {translateY: [0, '-5%'], scale: [1, 0.1]}
  ],
  update: () => {
    cards.classList.remove('none');
  }
})
.add({
  targets: '#board1',  
  keyframes: [
    {translateY: ['-100%', 0]},
  ],
  zIndex: 4
}, '-=1500')
.add({
  targets: '#board2',  
  keyframes: [
    {translateY: ['-100%', 0], rotateX: [-180, 0]},
  ],
  zIndex: 3
}, '-=1500')
.add({
  targets: '#board3',  
  keyframes: [
    {translateY: ['-200%', 0], rotateX: [180, 0]},
  ],
  zIndex: 2
}, '-=1500')
.add({
  targets: '#board4',  
  keyframes: [
    {translateY: ['-300%', 0], rotateX: [-180, 0]},
  ],
  zIndex: 1
}, '-=1500')
.add({
  targets: zoomer,
  keyframes: [
    {translateY: ['-5%', 0], scale: [0.1, 1]}
  ]
})


animateButt.addEventListener('click', () => {    
  if (!isOpen) {
    opentl.play();
    animateButt.setAttribute('aria-expanded', 'true');
    animateButt.setAttribute('disabled', '');
    isOpen = true;
  }  
});