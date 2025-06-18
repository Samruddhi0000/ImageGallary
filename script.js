let currentImageIndex = 0;
let images = [];

function openLightbox(src) {
  images = Array.from(document.querySelectorAll('.gallery-item'))
                .filter(img => img.style.display !== 'none')
                .map(img => img.src);

  currentImageIndex = images.indexOf(src);
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
