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

const errorBtn = document.querySelectorAll('#error-close');
const error = document.querySelector('.error');
const errorBlock = document.querySelectorAll('#error');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    bg.classList.add('show-bg');
    menu.classList.add('show');
  });
}

for (var i = 0; i < errorBtn.length; i++){
  errorBtn[i].addEventListener('click', () => {
    error.style.display = 'none';
  })
}

for (var i = 0; i < errorBlock.length; i++){
  errorBlock[i].addEventListener('click', () => {
    error.style.display = 'flex';
  })
}

bg.addEventListener('click', () => {
  bg.classList.remove('show-bg');
  menu.classList.remove('show');
});

let count = 1;

const one = () => {
  pointOne.classList.add('point-active');
  pointTwo.classList.remove('point-active');
  pointThree.classList.remove('point-active');

  reviewOne.classList.add('review-active');
  reviewTwo.classList.remove('review-active');
  reviewThree.classList.remove('review-active');
}

const two = () => {
  pointOne.classList.remove('point-active');
  pointTwo.classList.add('point-active');
  pointThree.classList.remove('point-active');

  reviewOne.classList.remove('review-active');
  reviewTwo.classList.add('review-active');
  reviewThree.classList.remove('review-active');
}

const three = () => {
  pointOne.classList.remove('point-active');
  pointTwo.classList.remove('point-active')
  pointThree.classList.add('point-active')

  reviewOne.classList.remove('review-active')
  reviewTwo.classList.remove('review-active')
  reviewThree.classList.add('review-active')
}

arrowLeft.addEventListener('click' , () => {
  count = count - 1
  if (count < 0) {
    count = 2
  }
  if (count == 0) {
    one();
  }
  if (count == 2) {
    three();
  }
  if (count == 1) {
    two();
  }
})

arrowRight.addEventListener('click' , () => {
  count = count + 1
  if (count > 2) {
    count = 0
  }
  if (count == 2) {
    three();
  }
  if (count == 0) {
    one();
  }
  if (count == 1) {
    two()
  }
})

pointOne.addEventListener('click' , () => {
  count = 0 
  one();
})

pointTwo.addEventListener('click' , () => {
  count = 1 
  two();
})

pointThree.addEventListener('click' , () => {
  count = 2 
  three()
})