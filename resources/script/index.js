import html2canvas from 'html2canvas';

const element = document.querySelector('.js-captcha');
const button = document.querySelector('.js-button');
const imageWrapper = document.querySelector('.js-image');

const captcha = async () => {
  const canvas = await html2canvas(element);
  const imageUrl = canvas.toDataURL();
  const image = new Image();

  image.onload = () => {
    imageWrapper.appendChild(image);
  };

  image.src = imageUrl;
};

button.addEventListener('click', () => {
  captcha();
});
