// Simple contact form submission handler (no backend yet)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will respond shortly.');
  this.reset();
});
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

function showLightbox(index) {
  const item = galleryItems[index];
  lightboxImg.src = item.href;
  lightboxImg.alt = item.querySelector('img').alt;
  caption.textContent = item.getAttribute('data-caption');
  lightbox.classList.remove('hidden');
  currentIndex = index;
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', e => {
    e.preventDefault();
    showLightbox(index);
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showLightbox(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showLightbox(currentIndex);
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});
