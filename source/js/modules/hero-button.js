const heroButton = document.querySelector('.hero__button');

const onClickButton = () => {
  const seasonTickets = document.querySelector('.tabs');

  if (seasonTickets) {
    seasonTickets.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

const movesSeasonTickets = () => {
  heroButton?.addEventListener('click', onClickButton);
};

export { movesSeasonTickets };
