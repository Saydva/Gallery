import OpenModal from './openModal.js';

const galleryImages = [];

function generateGalleryArray(width, height, id) {
  return `https://picsum.photos/${width}/${height}?random=${id}`;
}

for (let i = 1; i <= 6; i++) {
  const imageUrl = generateGalleryArray(300, 200, i);
  galleryImages.push({
    src: imageUrl,
    alt: `Obrázok ${i}`,
    caption: `Popis ${i}`,
  });
}

const galleryContainer = document.getElementById('gallery');

function displayGallery() {
  galleryImages.forEach((image) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.onclick = () => OpenModal(image.src);
    img.classList.add('gallery-img');

    const caption = document.createElement('div');
    caption.classList.add('caption');
    caption.textContent = image.caption;

    galleryItem.appendChild(img);
    galleryItem.appendChild(caption);
    galleryContainer.appendChild(galleryItem);
  });
}

displayGallery();
