const themeToggle = document.querySelector('.theme-toggle');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const btn = document.querySelector('.btn');
const mobilebtn = document.querySelector('.mobile-btn');
const teqball = document.querySelector('.teqball');
const menu = document.getElementById('mobile-menu');
const showcase = document.querySelector('.showcase');
const body = document.querySelector('body');
let animationHasPlayed = false;

// Fixes mobile viewport height issues
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.addEventListener('DOMContentLoaded', function () {
  // ✅ FORM SUBMIT: Disable unchecked checkboxes
  const form = document.getElementById('party-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      const checkboxes = form.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(cb => {
        if (!cb.checked) cb.disabled = true;
      });
    });
  }

  // ✅ Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      nav.classList.toggle('bg-secondary');
      nav.classList.toggle('bg-primary');
      menu.classList.toggle('bg-primary');
      menu.classList.toggle('bg-secondary');
      teqball.classList.toggle('bg-primary');
      teqball.classList.toggle('bg-secondary');
      navLinks.forEach(function (navLink) {
        navLink.classList.toggle('white-bg');
        if (navLink.classList.contains('active')) {
          navLink.classList.toggle('white-active-line');
        }
      });
      nav.classList.toggle('toggle-logo-2');

      // Toggle primary color variable
      const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
      document.documentElement.style.setProperty('--primary', primary === '#c60c30' ? 'black' : '#c60c30');
    });
  }

  // ✅ Animation handling
  if (!animationHasPlayed && showcase) {
    showcase.style.transitionDelay = '1.5s';
    showcase.addEventListener('transitionend', function () {
      showcase.style.animation = 'none';
    }, { once: true });
    animationHasPlayed = true;
  }

  // ✅ Mobile nav toggle
  function navToggle() {
    menu.classList.toggle('open');
    mobilebtn.classList.toggle('is-menu-open');
    document.body.classList.toggle('no-scroll');
  }

  if (mobilebtn) {
    mobilebtn.addEventListener('click', navToggle);
  }

  const links = menu.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', navToggle);
  });
});
