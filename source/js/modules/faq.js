const faq = document.querySelector('.faq');
const faqButtons = faq.querySelectorAll('.faq__pagination-item-button');
const faqContents = faq.querySelectorAll('.faq__contents-list');
const faqContentOpen = faq.querySelector('.faq__contents-item--open p');

const isEscapeKey = (evt) => evt.key === 'Escape';

const initialFaq = () => {
  faqContentOpen.style.maxHeight = `${faqContentOpen.scrollHeight}px`;
};

const onAccordionTitleClick = (evt) => {
  const accordionItem = evt.target.parentElement.parentElement;
  if (accordionItem.classList.contains('faq__contents-item')) {
    accordionItem.classList.toggle('faq__contents-item--open');
  }
  if (accordionItem.classList.contains('faq__contents-item--open')) {
    const accordionContent = accordionItem.querySelector('p');
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
  } else {
    const accordionContent = accordionItem.querySelector('p');
    accordionContent.style.maxHeight = 0;
  }
};

const onAccordionTitleKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const accordionItem = evt.target.parentElement.parentElement;
    if (accordionItem.classList.contains('faq__contents-item--open')) {
      accordionItem.classList.remove('faq__contents-item--open');
    }
  }
};

const addsEvents = () => {
  const accordion = faq.querySelector('.faq__contents-list--active');
  accordion?.addEventListener('click', onAccordionTitleClick);
  accordion?.addEventListener('keydown', onAccordionTitleKeydown);
};

const removesEvents = () => {
  const accordions = faq.querySelectorAll('.faq__contents-list');
  accordions?.forEach((item) => {
    if (!item.classList.contains('faq__contents-list--active')) {
      item.removeEventListener('click', onAccordionTitleClick);
      item.removeEventListener('keydown', onAccordionTitleKeydown);
    }
  });
};

const onButtonClick = (evt) => {
  const btnTarget = evt.currentTarget;
  const sections = btnTarget.dataset.faq;

  faqContents?.forEach((item) => {
    item.classList.remove('faq__contents-list--active');
  });

  faqButtons?.forEach((item) => {
    item.classList.remove('faq__button--active');
  });

  faq?.querySelector(`#${sections}`).classList.add('faq__contents-list--active');

  btnTarget.classList.add('faq__button--active');
  addsEvents();
  removesEvents();
};

const opensSectionFaq = () => {
  faqButtons?.forEach((element) => {
    element.addEventListener('click', onButtonClick);
  });
  addsEvents();
  removesEvents();
};

export { opensSectionFaq, initialFaq };
