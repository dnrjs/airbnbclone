'use strict';

const navbar = document.querySelector('.navbar');
const navbarIcon = document.querySelector('.navbar__icon');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarRightHost = document.querySelector('.navbar__rightmenu__host');
const navbarRightGlobe = document.querySelector('.navbar__rightmenu__globe');
const navbarRightToggle = document.querySelector('.navbar__rightmenu__toggle');
const homeSearchChange = document.querySelector('.home__searchchange');
const smallSearch = document.querySelector('.smallsearch');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        navbarIcon.classList.add('navbarIcon--red');
        navbarMenu.classList.add('navbarMenu--none');
        navbarRightHost.classList.add('navbarRightHost--black');
        navbarRightGlobe.classList.add('navbarRightGlobe--black');
        smallSearch.classList.add('smallSearch--white');
        homeSearchShow();
    } else{
        navbar.classList.remove('navbar--dark');
        navbarIcon.classList.remove('navbarIcon--red');
        navbarMenu.classList.remove('navbarMenu--none');
        navbarRightHost.classList.remove('navbarRightHost--black');
        navbarRightGlobe.classList.remove('navbarRightGlobe--black');
        smallSearch.classList.remove('smallSearch--white');
        homeSearchNotShow();
    }
});

const scrollUp = document.querySelector('.scrollup');
window.onmousewheel = function(e){
    if(e.wheelDelta > 0){
        scrollUp.classList.add('scrollup--up');
    }
    else{
        scrollUp.classList.remove('scrollup--up');
    }
}

function homeSearchShow() {
    homeSearchChange.style.visibility = 'visible';
}

function homeSearchNotShow(){
    homeSearchChange.style.visibility = 'hidden';
}

navbarIcon.addEventListener('click', () => {
    scrollIntoView('.notice');
})


const navbarRogin = document.querySelector('.navbar__rogin');
navbarRightToggle.addEventListener('click', () => {
    navbarRogin.classList.toggle('open');
})



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

