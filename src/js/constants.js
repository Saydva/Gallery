export function generateImageUrl(width, height, id) {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}

export const MAX_IMAGE_ID = 9;
