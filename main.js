
document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.getElementById('share-button');
  const shareButton2 = document.getElementById('share-close-button');
  const shareOption = document.getElementById('share-option');
  const footer = document.getElementById('footer');
  const shareCloseButton = document.getElementById('share-close-button');

  function toggleShareOption() {
    const mediaQuery = window.matchMedia('(min-width: 700px)');
    if (mediaQuery.matches) {
      // For screens wider than 700px, toggle share-option visibility only
      if (shareOption.style.display === 'none' || shareOption.style.display === '') {
        shareOption.style.display = 'flex';
        shareButton2.style.display= 'none';
      } else {
        shareOption.style.display = 'none';
        shareButton2.style.display= 'flex';
      }
    } else {
      // For smaller screens, toggle between footer and share-option
      if (shareOption.style.display === 'none' || shareOption.style.display === '') {
        shareOption.style.display = 'flex';
        footer.style.display = 'none';
      } else {
        shareOption.style.display = 'none';
        footer.style.display = 'flex';
      }
    }
  }

  shareButton.addEventListener('click', toggleShareOption);
  shareCloseButton.addEventListener('click', toggleShareOption);
});
