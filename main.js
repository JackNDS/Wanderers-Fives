const themeToggle = document.querySelector('.theme-toggle');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const btn = document.querySelector('.btn');
const mobilebtn = document.querySelector('.mobile-btn');
const teqball = document.querySelector('.teqball');
const menu = document.getElementById('mobile-menu');
const showcase = document.querySelector('.showcase');
/* const mural = document.querySelector('.mural'); */
const body = document.querySelector('body');
let animationHasPlayed = false;

// Get all the form inputs
const formInputs = document.querySelectorAll('input');

// Filter the checked inputs
const checkedInputs = [...formInputs].filter(input => input.checked);

// Create a new FormData object with only the checked inputs
const formData = new FormData();
checkedInputs.forEach(input => formData.append(input.name, input.value));

// Submit the form with the filtered FormData object
fetch('/', {
  method: 'POST',
  body: formData
})
  .then(() => console.log('Form submitted successfully!'))
  .catch(error => console.error(error));


let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

themeToggle.addEventListener('click', function() {
  nav.classList.toggle('bg-secondary');
  nav.classList.toggle('bg-primary');
  menu.classList.toggle('bg-primary');
  menu.classList.toggle('bg-secondary');
  teqball.classList.toggle('bg-primary');
  teqball.classList.toggle('bg-secondary');
  navLinks.forEach(function(navLink) {
    navLink.classList.toggle('white-bg');
    if (navLink.classList.contains('active')) {
        navLink.classList.toggle('white-active-line');
      }
  });
  nav.classList.toggle('toggle-logo-2');
});

document.addEventListener('DOMContentLoaded', function() {
  // your code goes here


themeToggle.addEventListener('click', function() {
  if (getComputedStyle(document.documentElement).getPropertyValue('--primary') === '#c60c30') {
    document.documentElement.style.setProperty('--primary', 'black');
  } else {
    document.documentElement.style.setProperty('--primary', '#c60c30');
  }
});

if (!animationHasPlayed) {
  // Add a transition-delay to allow the animation to complete before removing the animation property
  showcase.style.transitionDelay = '1.5s';
  showcase.addEventListener('transitionend', function() {
  // Remove the animation property from the showcase element after the animation has completed
  showcase.style.animation = 'none';
  }, {once: true});
  animationHasPlayed = true;
  }
  });





function navToggle() {
  menu.classList.toggle('open');
  mobilebtn.classList.toggle('is-menu-open');
  document.body.classList.toggle('no-scroll');
}


mobilebtn.addEventListener('click', navToggle);

// get all the links in the mobile menu
const links = menu.querySelectorAll('a');

// add event listeners to all links to toggle the mobile menu off
links.forEach(function(link) {
  link.addEventListener('click', navToggle);
  
});

