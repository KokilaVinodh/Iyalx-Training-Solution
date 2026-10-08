```javascript
/* =====================================================
   IYALX TRAINING WEBSITE
   Main JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

}


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    if (navMenu) {
      navMenu.classList.remove("active");
    }

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


if (contactForm) {

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


    /* Validate required fields */

    if (!name || !email || !message) {

      if (formMessage) {

        formMessage.textContent =
          "Please complete all required fields.";

        formMessage.style.color = "#b54b4b";

      }

      return;

    }


    /*
      CONTACT FORM

      The current website is hosted on GitHub Pages.

      GitHub Pages cannot directly send emails.

      Connect this form to Formspree, EmailJS,
      Google Forms, or another form service
      to receive enquiries by email.
    */


    if (formMessage) {

      formMessage.textContent =
        `Thank you, ${name}! Your enquiry has been received.`;

      formMessage.style.color = "#8a682c";

    }


    /* Clear the form */

    contactForm.reset();

  });

}


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


if (navbar) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

      navbar.classList.add("scrolled");

    } else {

      navbar.classList.remove("scrolled");

    }

  });

}
```
