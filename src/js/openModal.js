import { generateImageUrl } from './constants.js';

function OpenModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');
  const prevbtn = document.getElementById('prevBtn');
  const nextbtn = document.getElementById('nextBtn');

  modal.style.display = 'flex';
  // Opravený index na 4 pre picsum.photos
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  modal.onclick = function (event) {
    if (
      event.target !== modalImg &&
      event.target !== nextbtn &&
      event.target !== prevbtn
    ) {
      modal.style.display = 'none';
    }
  };
  console.log(imgSrc);

  let id = parseInt(imgSrc.split('/')[4]);

  modalImg.src = generateImageUrl(800, 600, id);

  prevbtn.onclick = function () {
    id = id - 1 < 1 ? 12 : id - 1;
    modalImg.src = generateImageUrl(800, 600, id);
    // console.log(id);
  };
  nextbtn.onclick = function () {
    id = id + 1 > 12 ? 1 : id + 1;
    modalImg.src = generateImageUrl(800, 600, id);
    // console.log(id);
  };

  // console.log(mo)
}

export default OpenModal;
