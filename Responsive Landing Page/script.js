// JavaScript for form submission and page interactivity

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const course = document.getElementById('course').value;
  
  // Show success message
  const successMessage = document.getElementById('successMessage');
  successMessage.innerText = `Thank you, ${name}! You've successfully signed up for the ${course} course.`;
  successMessage.style.display = 'block';
  
  // Clear the form
  document.getElementById('signupForm').reset();
}

// Smooth scroll to sections
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Sticky navigation effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});