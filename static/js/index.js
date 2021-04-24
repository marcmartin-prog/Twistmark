const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-btn');

hamburger.addEventListener('click', function(){
  if (mobileMenu.style.display == 'none'){
    mobileMenu.style.display = 'block';
    menuBtn.setAttribute('src', 'images/Vector.png');
  } else {
    mobileMenu.style.display = 'none';
    menuBtn.setAttribute('src', 'images/hamburger.svg');
  }
});


const events = document.querySelector('.events');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener('click', function(){
  events.scrollLeft -=400 ;
});


rightArrow.addEventListener('click', function(){
  events.scrollLeft +=400;
});
