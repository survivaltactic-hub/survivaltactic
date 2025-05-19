// Simple contact form submission handler (no backend yet)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will respond shortly.');
  this.reset();
});
