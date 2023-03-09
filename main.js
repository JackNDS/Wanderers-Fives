const themeToggle = document.querySelector('.theme-toggle');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const btn = document.querySelector('.btn');
const mobilebtn = document.querySelector('.mobile-btn');
const menu = document.getElementById('mobile-menu');
const mural = document.querySelector('.mural');
const body = document.querySelector('body');


let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

themeToggle.addEventListener('click', function() {
  nav.classList.toggle('bg-secondary');
  nav.classList.toggle('bg-primary');
  menu.classList.toggle('bg-primary');
  menu.classList.toggle('bg-secondary');
  navLinks.forEach(function(navLink) {
    navLink.classList.toggle('white-bg');
    if (navLink.classList.contains('active')) {
        navLink.classList.toggle('white-active-line');
      }
  });
  nav.classList.toggle('toggle-logo-2');
});

themeToggle.addEventListener('click', function() {
  if (getComputedStyle(document.documentElement).getPropertyValue('--primary') === '#c60c30') {
    document.documentElement.style.setProperty('--primary', 'black');
  } else {
    document.documentElement.style.setProperty('--primary', '#c60c30');
  }
});


function navToggle() {
  menu.classList.toggle('open');
  mobilebtn.classList.toggle('is-menu-open');
  document.body.classList.add('no-scroll');
}


mobilebtn.addEventListener('click', navToggle);

// get all the links in the mobile menu
const links = menu.querySelectorAll('a');

// add event listeners to all links to toggle the mobile menu off
links.forEach(function(link) {
  link.addEventListener('click', navToggle);
  
});
