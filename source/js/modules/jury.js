import { Swiper } from '../vendor/swiper';

const initJurySlider = () => {
  const swiper = new Swiper('.jury__container', {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    breakpointsBase: 'container',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      560: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1160: {
        slidesPerView: 4,
        spaceBetween: 40
      },
    },
    init: false,
    slideActiveClass: 'jury__item-active',
    slideClass: 'jury__item',
    wrapperClass: 'jury__list',
    loop: true,
    navigation: {
      nextEl: '.jury__button--next',
      prevEl: '.jury__button--prev',
    },
  });

  const lol = document.querySelector('.jury__container');

  if (lol) {
    swiper.init(lol);
    console.log(lol)
  }
};

export { initJurySlider };
