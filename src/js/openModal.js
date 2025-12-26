export const baseUrl = 'https://loremflickr.com/';

export const generateImageUrl = (width, height, id) =>
  `${baseUrl}${width}/${height}?random=${id}`;

function OpenModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');
  modal.style.display = 'flex';
  modalImg.src = generateImageUrl(800, 600, imgSrc.split('random=')[1]);
  // console.log(imgSrc);
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  modal.onclick = function (event) {
    if (event.target !== modalImg) {
      modal.style.display = 'none';
    }
  };
}

export default OpenModal;
