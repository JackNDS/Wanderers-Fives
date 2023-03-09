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


// Party Form JS //
function submitForm(event) {
  event.preventDefault(); // Prevents the form from submitting normally

  const form = document.getElementById("party-form"); // Get the form element
  const inputs = form.querySelectorAll('input[type="checkbox"]'); // Get all the checkboxes in the form
  const formData = new FormData(form); // Create a new FormData object to store the form data

  // Loop through the checkboxes and add the values to the FormData object only if they are checked
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      formData.append(inputs[i].name, inputs[i].value);
    }
  }

  // Submit the form with the updated FormData object
  fetch(form.action, {
    method: form.method,
    body: formData
  })
    .then(response => {
      // Handle the form submission response
      console.log(response);
    })
    .catch(error => {
      // Handle the form submission error
      console.error(error);
    });
}
