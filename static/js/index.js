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

//events horizontal scrolling

const events = document.querySelector('.events');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const eventItemWidth = document.querySelector('.event').clientWidth;

leftArrow.addEventListener('click', function(){
  events.scrollBy({left: -eventItemWidth, top: 0, behavior: 'smooth'});
});

rightArrow.addEventListener('click', function(){
  events.scrollBy({left: eventItemWidth, top: 0, behavior: 'smooth'});
});


//gallery horizontal scrolling
const galleryLArrow = document.querySelector('.ga-arrow-left');
const galleryRArrow = document.querySelector('.ga-arrow-right');
const galleryItem = document.querySelector('.gallery-item');
const itemWidth = document.querySelector('.row').clientWidth;
const scroller = document.querySelector('.gallery');

galleryLArrow.addEventListener('click', galleryScrollLeft);

galleryRArrow.addEventListener('click', galleryScrollRight);
/*
function galleryScrollRight(){
    scroller.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
}

function galleryScrollLeft(){
    scroller.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
}

setInterval(galleryScrollRight, 3000);
*/
