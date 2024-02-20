document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu for small screens
    document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.querySelector('.nav-menu').classList.toggle('active');
    });
  
    // Form validation
    document.querySelector('form').addEventListener('submit', function(e) {
      const emailInput = document.querySelector('#email');
      const emailValue = emailInput.value.trim();
  
      if (!isValidEmail(emailValue)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  
    function isValidEmail(email) {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });  