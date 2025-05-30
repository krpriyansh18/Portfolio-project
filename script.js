// Smooth Scroll for nav links & active class toggling
const navLinks = document.querySelectorAll('nav a.nav-link');
const sections = document.querySelectorAll('section');

function setActiveLinkOnScroll() {
  let scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    navLinks.forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});

window.addEventListener('scroll', setActiveLinkOnScroll);
window.addEventListener('load', () => {
  setActiveLinkOnScroll();
  revealOnLoad();
});

// Section reveal on scroll
const revealSections = document.querySelectorAll('.reveal-section');

function revealOnScroll() {
  let windowBottom = window.innerHeight + window.scrollY + 50;
  revealSections.forEach(section => {
    if (windowBottom > section.offsetTop) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Reveal all on load for initial viewport
function revealOnLoad() {
  revealSections.forEach(section => {
    if (window.innerHeight + window.scrollY > section.offsetTop) {
      section.classList.add('visible');
    }
  });
}

// Contact form validation and submission simulation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    alert('Please enter your name.');
    form.name.focus();
    return;
  }

  if (!email || !validateEmail(email)) {
    alert('Please enter a valid email address.');
    form.email.focus();
    return;
  }

  if (!message) {
    alert('Please enter your message.');
    form.message.focus();
    return;
  }

  // Simulate form submission
  alert('Thank you for reaching out, ' + name + '! I will get back to you soon.');

  // Reset form
  form.reset();
});

function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
