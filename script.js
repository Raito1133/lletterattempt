const popup = document.getElementById('popup');
const origami = document.querySelector('.origami-crane');

function openLetter() {
  popup.classList.add('active');
  origami.style.pointerEvents = 'none';
  origami.style.opacity = '0.3';
  origami.style.cursor = 'default';
  origami.style.transition = 'all 0.3s ease';
}

function closeLetter() {
  popup.classList.remove('active');
  // re-enable clicking
  origami.style.pointerEvents = 'auto';
  origami.style.opacity = '1';
  origami.style.cursor = 'pointer';
}

function closeLetterFromBackground(e) {
  if (e.target === popup) {
    closeLetter();
  }
}
