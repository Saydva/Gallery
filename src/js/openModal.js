import { getModalImg } from './modalImg.js';

function OpenModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');
  modal.style.display = 'flex';
  modalImg.src = getModalImg(800, 600, imgSrc.split('=')[1]);
  // console.log(imgSrc);
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  modal.onclick = function (event) {
    if (event.target !== modalImg && event.target !== closeBtn) {
      modal.style.display = 'none';
    }
  };
}

export default OpenModal;
