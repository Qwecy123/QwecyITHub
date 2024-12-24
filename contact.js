// contact.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      // Collect form data
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Validate inputs
      if (!name || !phone || !email || !message) {
        displayMessage("Please fill in all the fields.", "error");
        return;
      }
  
      if (!validateEmail(email)) {
        displayMessage("Please enter a valid email address.", "error");
        return;
      }
  
      // Simulate form submission
      try {
        const response = await fetch("https://formspree.io/f/xvgolblv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, phone, email, message }),
        });
  
        if (response.ok) {
          displayMessage("Thank you! Your message has been sent.", "success");
          form.reset();
        } else {
          displayMessage("Oops! Something went wrong. Please try again.", "error");
        }
      } catch (error) {
        displayMessage("Network error. Please check your connection.", "error");
      }
    });
  
    // Function to display success/error messages
    function displayMessage(message, type) {
      formMessage.textContent = message;
      formMessage.className = type === "success" ? "success" : "error";
      formMessage.classList.remove("hidden");
  
      setTimeout(() => {
        formMessage.classList.add("hidden");
      }, 5000);
    }
  
    // Email validation function
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  // scripts.js

// Function to validate the registration form
function validateForm() {
  const form = document.querySelector('form');
  const name = form.name.value;
  const number = form.phone.value;
  const email = form.email.value;

  if (!name || !number || !email) {
      alert("Please fill out all required fields.");
      return false;
  }
  return true;
}

// Function to initialize navigation
function initNavigation() {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = event.target.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', function(event) {
          if (!validateForm()) {
              event.preventDefault();
          }
      });
  }
});

// Back to Top button functionality
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
