/* =====================================================
   IYALX TRAINING WEBSITE
   Main JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});


/* Close mobile menu when clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

  });

});


/* ================= FOOTER YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* ================= CONTACT FORM ================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

  event.preventDefault();


  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const program =
    document.getElementById("program").value;

  const message =
    document.getElementById("message").value.trim();


  if (!name || !email || !message) {

    formMessage.textContent =
      "Please complete all required fields.";

    formMessage.style.color = "#b54b4b";

    return;

  }


  /*
    This is currently a front-end form.

    To receive real enquiries, connect this
    form to a service such as Formspree,
    EmailJS, Google Forms, or your own backend.
  */


  formMessage.textContent =
    `Thank you, ${name}! Your enquiry has been received.`;

  formMessage.style.color = "#8a682c";


  contactForm.reset();

});


/* ================= SCROLL ANIMATION ================= */

const animatedElements =
  document.querySelectorAll(
    ".course-card, .feature, .section-content, .section-image"
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


animatedElements.forEach(element => {

  element.classList.add("hidden");

  observer.observe(element);

});


/* ================= HEADER EFFECT ================= */

const navbar =
  document.querySelector(".navbar");


window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});
