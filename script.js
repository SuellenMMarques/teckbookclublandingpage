const containerStars = document.querySelectorAll('.container-stars');

const starsHTML = '<img src="./assets/images/icon-star.svg" alt="Estrela">'.repeat(5);

// Injeta esse texto de uma vez só na div
containerStars.forEach((container) => {
  container.innerHTML = starsHTML;
});