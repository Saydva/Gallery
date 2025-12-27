export function createProgressDots(parentElement, numberOfDots = 5) {
  let dotsContainer = document.getElementById('dotsContainer');
  if (!dotsContainer) {
    dotsContainer = document.createElement('div');
    dotsContainer.id = 'dotsContainer';
    dotsContainer.className =
      'absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2';
    parentElement.appendChild(dotsContainer);
  } else if (dotsContainer.children.length === numberOfDots) {
    return; // Already created with correct number of dots
  } else {
    dotsContainer.innerHTML = '';
  }

  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'w-4 h-4 bg-white rounded-full bg-opacity-50';
    dotsContainer.appendChild(dot);
  }
}

export function updateProgressDots(currentId) {
  const dotsContainer = document.getElementById('dotsContainer');
  if (dotsContainer) {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
      if (i === currentId - 1) {
        dots[i].className = 'w-4 h-4 bg-white rounded-full bg-opacity-100';
      } else {
        dots[i].className = 'w-4 h-4 bg-white rounded-full bg-opacity-50';
      }
    }
  }
}
