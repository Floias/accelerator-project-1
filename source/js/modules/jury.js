import { Swiper } from '../vendor/swiper';
import { sliderOptions } from '../data/data';

const initJurySlider = () => {
  const swiper = new Swiper('.jury__container', {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    breakpointsBase: 'container',
    breakpoints: sliderOptions,
    init: false,
    slideActiveClass: 'jury__item--active',
    slideClass: 'jury__item',
    wrapperClass: 'jury__list',
    loop: true,
    navigation: {
      nextEl: '.jury__button--next',
      prevEl: '.jury__button--prev',
    },
  });

  const container = document.querySelector('.jury__container');

  if (container) {
    swiper.init(container);
  }
};

export { initJurySlider };
