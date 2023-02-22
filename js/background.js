const images = ['cat01.jpg', 'cat02.jpg', 'cat03.jpg'];
const chosenImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement('img');

bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);