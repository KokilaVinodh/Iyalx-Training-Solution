
document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // MOBILE NAVIGATION
  // ==============================

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("#primary-navigation");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

      const isOpen = navMenu.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", isOpen);

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );

    });

    // Close menu after clicking a navigation link
    navMenu.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

      });

    });

    // Close menu when pressing Escape
    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {

        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

      }

    });

  }


  // ==============================
  // AUTOMATIC FOOTER YEAR
  // ==============================

  const yearElements = document.querySelectorAll("[data-year]");

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });


  // ==============================
  // CONTACT FORM
  // ==============================

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {

    // Automatically select course from URL
    const programSelect = contactForm.querySelector('[name="program"]');

    if (programSelect) {

      const urlParams = new URLSearchParams(window.location.search);
      const selectedCourse = urlParams.get("course");

      if (selectedCourse) {

        const matchingOption = Array.from(programSelect.options).find(
          option =>
            option.value.toLowerCase() === selectedCourse.toLowerCase() ||
            option.textContent.trim().toLowerCase() === selectedCourse.toLowerCase()
        );

        if (matchingOption) {
          programSelect.value = matchingOption.value;
        }

      }

    }

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      if (formMessage) {

        formMessage.textContent =
          "Thank you for your enquiry! This form is currently a demo and is not connected to email yet.";

        formMessage.style.color = "#b88635";

      }

    });

  }


  // ==============================
  // CAREERS APPLICATION FORM
  // ==============================

  const careerForm = document.getElementById("careerForm");
  const careerMessage = document.getElementById("careerMessage");

  if (careerForm) {

    careerForm.addEventListener("submit", function (event) {

      event.preventDefault();

      if (!careerForm.checkValidity()) {
        careerForm.reportValidity();
        return;
      }

      if (careerMessage) {

        careerMessage.textContent =
          "Thank you for your interest! This application form is currently a demo and is not connected to email yet.";

        careerMessage.style.color = "#b88635";

      }

    });

  }

});
