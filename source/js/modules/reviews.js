import { Swiper } from '../vendor/swiper';
import { sliderOptions } from '../data/data';

const container = document.querySelector('.reviews__container');
const buttonPrev = document.querySelector('.reviews__button--prev');
const buttonNext = document.querySelector('.reviews__button--next');

const initReviewsSlider = () => {
  const swiper = new Swiper('.reviews__container', {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    breakpointsBase: 'container',
    slidesPerView: sliderOptions[320].slidesPerView,
    spaceBetween: sliderOptions[320].spaceBetween,
    init: false,
    slideActiveClass: 'reviews__item--active',
    slideClass: 'reviews__item',
    wrapperClass: 'reviews__list',
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    on: {
      slideChange: () => {
        if (swiper.isBeginning) {
          buttonPrev.disabled = true;
        } else {
          buttonPrev.disabled = false;
        }

        if (swiper.isEnd) {
          buttonNext.disabled = true;
        } else {
          buttonNext.disabled = false;
        }
      },
    },
  });

  if (container) {
    swiper.init(container);
  }
};

export { initReviewsSlider };
