const themeToggle = document.querySelector('.theme-toggle');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const btn = document.querySelector('.btn');
const mobilebtn = document.querySelector('.mobile-btn');
const menu = document.getElementById('mobile-menu');


themeToggle.addEventListener('click', function() {
  nav.classList.toggle('bg-secondary');
  nav.classList.toggle('bg-primary');
  btn.classList.toggle('bg-primary');
  btn.classList.toggle('bg-secondary');
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

mobilebtn.addEventListener('click', function() {
  mobilebtn.classList.toggle('is-menu-open');
}, 1500
);

function navToggle() {
  menu.classList.toggle('open')
}

mobilebtn.addEventListener('click', navToggle)
