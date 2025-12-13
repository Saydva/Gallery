let galleryImages = [];

function generateGalleryArray(width, height, id) {
  return `https://picsum.photos/${width}/${height}?random=${id}`;
}

for (let i = 1; i <= 6; i++) {
  const imageUrl = generateGalleryArray(300, 200, i);
  galleryImages.push(imageUrl);
}

export default galleryImages;
