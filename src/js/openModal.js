export function generateImageUrl(width, height, id) {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}

function OpenModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');
  modal.style.display = 'flex';
  // Opravený index na 4 pre picsum.photos
  const id = imgSrc.split('/')[4];
  modalImg.src = generateImageUrl(800, 600, id);
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
}

const prevbtn = document.getElementById('prevBtn');
const nextbtn = document.getElementById('nextBtn');

prevbtn.onclick = function () {
  console.log('prev');
};
nextbtn.onclick = function () {
  console.log('next');
};

export default OpenModal;
