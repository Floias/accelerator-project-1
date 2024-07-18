const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('.tabs__button');
const tabContents = tabs.querySelectorAll('.tabs__contents-item');

const onButtonClick = (evt) => {
  const btnTarget = evt.currentTarget;
  const duration = btnTarget.dataset.duration;

  tabContents.forEach((item) => {
    item.classList.remove('tabs__item-active');
  });

  tabButtons.forEach((item) => {
    item.classList.remove('tabs__button-active');
  });

  tabs.querySelector(`#${duration}`).classList.add('tabs__item-active');

  btnTarget.classList.add('tabs__button-active');
};

const opensTabs = () => {
  tabButtons.forEach((element) => {
    element.addEventListener('click', onButtonClick);
  });
};

export { opensTabs };
