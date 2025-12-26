import OpenModal from './openModal.js';

import { generateImageUrl } from './openModal.js';

const galleryImages = [];

function generateGalleryArray(width, height, id) {
  return generateImageUrl(width, height, id);
}

for (let i = 1; i <= 12; i++) {
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
    galleryItem.className =
      'p-1.5 bg-white rounded-md flex flex-col items-center justify-center text-center hover:scale-110 hover:transition-transform hover:duration-500 hover:shadow-lg';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.onclick = () => OpenModal(image.src);
    img.className = 'rounded-md object-contain cursor-pointer';

    const caption = document.createElement('div');
    caption.className = 'mt-1.5 text-sm text-gray-800';
    caption.textContent = image.caption;

    galleryItem.appendChild(img);
    galleryItem.appendChild(caption);
    galleryContainer.appendChild(galleryItem);
  });
}

displayGallery();
