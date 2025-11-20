const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const menuLinks = document.querySelectorAll('.menu-link');

menuBtn.addEventListener('click', () => {
  menuOverlay.classList.toggle('show');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('show');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Time Display Functionality
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();
  const timeDisplay = document.getElementById('time-display');
  if (timeDisplay) {
    timeDisplay.textContent = `CZECH REPUBLIC - ${timeString}`;
  }
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  // Show success message (you can customize this)
  alert("Message Sent! Thank you for reaching out. We'll get back to you soon.");
  // Reset form
  contactForm.reset();
  // Log form data (for demonstration)
  console.log('Form submitted:', formData);
});

// Scroll animations observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.work-card, .stat-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 88; // Height of fixed header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

