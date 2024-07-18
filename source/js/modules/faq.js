const faq = document.querySelector('.faq');
const faqButtons = faq.querySelectorAll('.faq__pagination-item-button');
const faqContents = faq.querySelectorAll('.faq__contents-list');

const onButtonClick = (evt) => {
  const btnTarget = evt.currentTarget;
  const sections = btnTarget.dataset.faq;

  faqContents.forEach((item) => {
    item.classList.remove('faq__contents-list--active');
  });

  faqButtons.forEach((item) => {
    item.classList.remove('faq__button--active');
  });

  faq.querySelector(`#${sections}`).classList.add('faq__contents-list--active');

  btnTarget.classList.add('faq__button--active');
};

const opensSectionFaq = () => {
  faqButtons.forEach((element) => {
    element.addEventListener('click', onButtonClick);
  });
};

export { opensSectionFaq };
