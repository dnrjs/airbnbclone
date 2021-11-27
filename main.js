'use strict';

const navbar = document.querySelector('.navbar');
const navbarIcon = document.querySelector('.navbar__icon');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarRightHost = document.querySelector('.navbar__rightmenu__host');
const navbarRightGlobe = document.querySelector('.navbar__rightmenu__globe');
const homeSearchChange = document.querySelector('.home__searchchange');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        navbarIcon.classList.add('navbarIcon--red');
        navbarMenu.classList.add('navbarMenu--none');
        navbarRightHost.classList.add('navbarRightHost--black');
        navbarRightGlobe.classList.add('navbarRightGlobe--black');
        homeSearchShow();
    } else{
        navbar.classList.remove('navbar--dark');
        navbarIcon.classList.remove('navbarIcon--red');
        navbarMenu.classList.remove('navbarMenu--none');
        navbarRightHost.classList.remove('nabar--rightmenu--host');
        navbarRightGlobe.classList.remove('navbar--rightmenu--globe');
        homeSearchNotShow();
    }
});

function homeSearchShow() {
    homeSearchChange.style.visibility = 'visible';
}

function homeSearchNotShow(){
    homeSearchChange.style.visibility = 'hidden';
}

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

