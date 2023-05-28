const btns = document.querySelectorAll('.nav-mobile-menu-btn');
const menu = document.querySelector('.nav-mobile-menu-right');
const bg = document.querySelector('.nav-mobile-menu');
const close = document.querySelector('.nav-mobile-menu-right-nav-close');
const arrowLeft = document.querySelector('.reviews-arrow-left');
const arrowRight = document.querySelector('.reviews-arrow-right');
const pointOne = document.querySelector('#point-one');
const pointTwo = document.querySelector('#point-two');
const pointThree = document.querySelector('#point-three');
const reviewOne = document.querySelector('#review-one');
const reviewTwo = document.querySelector('#review-two');
const reviewThree = document.querySelector('#review-three');

let count = 1;

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    bg.classList.add('show-bg');
    menu.classList.add('show');
  });
}

bg.addEventListener('click', function() {
  bg.classList.remove('show-bg');
  menu.classList.remove('show');
});

arrowLeft.addEventListener('click' , () => {
  count = count - 1
  if (count < 0) {
    count = 2
  }
  if (count == 0) {
    pointOne.classList.add('point-active');
    pointTwo.classList.remove('point-active');

    reviewOne.classList.add('review-active')
    reviewTwo.classList.remove('review-active')
  }
  if (count == 2) {
    pointThree.classList.add('point-active');
    pointOne.classList.remove('point-active')

    reviewThree.classList.add('review-active')
    reviewOne.classList.remove('review-active')
  }
  if (count == 1) {
    pointTwo.classList.add('point-active');
    pointThree.classList.remove('point-active')

    reviewTwo.classList.add('review-active')
    reviewThree.classList.remove('review-active')
  }
})

arrowRight.addEventListener('click' , () => {
  count = count + 1
  if (count > 2) {
    count = 0
  }
  if (count == 2) {
    pointThree.classList.add('point-active');
    pointTwo.classList.remove('point-active')

    reviewThree.classList.add('review-active')
    reviewTwo.classList.remove('review-active')
  }
  if (count == 0) {
    pointOne.classList.add('point-active');
    pointThree.classList.remove('point-active')

    reviewOne.classList.add('review-active')
    reviewThree.classList.remove('review-active')
  }
  if (count == 1) {
    pointTwo.classList.add('point-active');
    pointOne.classList.remove('point-active')

    reviewTwo.classList.add('review-active')
    reviewOne.classList.remove('review-active')
  }
})

pointOne.addEventListener('click' , () => {
  count = 0 
  pointOne.classList.add('point-active');
  pointTwo.classList.remove('point-active')
  pointThree.classList.remove('point-active')

  reviewOne.classList.add('review-active')
  reviewTwo.classList.remove('review-active')
  reviewThree.classList.remove('review-active')
})

pointTwo.addEventListener('click' , () => {
  count = 1 
  pointOne.classList.remove('point-active');
  pointTwo.classList.add('point-active')
  pointThree.classList.remove('point-active')

  reviewOne.classList.remove('review-active')
  reviewTwo.classList.add('review-active')
  reviewThree.classList.remove('review-active')
})

pointThree.addEventListener('click' , () => {
  count = 2 
  pointOne.classList.remove('point-active');
  pointTwo.classList.remove('point-active')
  pointThree.classList.add('point-active')

  reviewOne.classList.remove('review-active')
  reviewTwo.classList.remove('review-active')
  reviewThree.classList.add('review-active')
})