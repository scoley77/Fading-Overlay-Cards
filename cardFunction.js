const cards = document.querySelectorAll('.card-content');
const overs = document.querySelectorAll('.overlay');

cards.forEach((card) => {
  card.addEventListener('mouseover', (e) => {
    e.target.nextSibling.nextSibling.style.visibility = 'visible';
    e.target.nextSibling.nextSibling.style.opacity = '0.8';
  });
});

overs.forEach((over) => {
  over.addEventListener('mouseout', (e) => {
    e.target.style.visibility = 'hidden';
    e.target.style.opacity = '0';
  });
});