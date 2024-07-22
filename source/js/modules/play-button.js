const playButton = document.querySelector('.about__video-button');
const videoIframe = document.querySelector('.about__video-wrapper iframe');
const aboutVideoImage = document.querySelector('.about__video-wrapper img');

const onButtonClick = () => {
  videoIframe.style.display = 'block';
  playButton.style.display = 'none';
  aboutVideoImage.style.display = 'none';
  videoIframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
};

const playVideo = () => playButton?.addEventListener('click', onButtonClick);

export { playVideo };
