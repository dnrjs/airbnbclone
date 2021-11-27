'use strict';

const navbar = document.querySelector('.navbar');
const navbarIcon = document.querySelector('.navbar__icon');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarRightHost = document.querySelector('.navbar__rightmenu__host');
const navbarRightGlobe = document.querySelector('.navbar__rightmenu__globe');
const homeSearch = document.querySelector('.home__search');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        navbarIcon.classList.add('navbarIcon--red');
        navbarMenu.classList.add('navbarMenu--none');
        navbarRightHost.classList.add('navbarRightHost--black');
        navbarRightGlobe.classList.add('navbarRightGlobe--black');
    } else{
        navbar.classList.remove('navbar--dark');
        navbarIcon.classList.remove('navbarIcon--red');
        navbarMenu.classList.remove('navbarMenu--none');
        navbarRightHost.classList.remove('nabar--rightmenu--host');
        navbarRightGlobe.classList.remove('navbar--rightmenu--globe');
    }
});