const buttonAllEl = document.querySelectorAll('button');
const bodyEl = document.querySelector('body');

let timerId = null;
buttonAllEl[0].classList.add('button');
buttonAllEl[1].classList.add('button');
buttonAllEl[1].style.color = 'grey';
console.log(buttonAllEl);
console.log(buttonAllEl[0]);
console.log(buttonAllEl[1]);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonStartOn = event => {
  console.log('hello start');
  timerId = setInterval(() => {
    bodyEl.style.background = getRandomHexColor();
    bodyEl.style.zIndex = 5;
    bodyEl.style.opacity = 0.7;
    buttonAllEl[1].style.color = 'black';
    buttonAllEl[1].style.zIndex = 20;
    buttonAllEl[0].style.backgroundColor = '#ebf3f8f5';
    buttonAllEl[0].style.color = 'grey';
    buttonAllEl[1].style.backgroundColor = 'white';
    buttonAllEl[0].style.zIndex = 0;
  }, 1000);
};
const buttonStopOn = event => {
  console.log('hello stop');
  clearInterval(timerId);
  bodyEl.style.zIndex = 5;
  bodyEl.style.opacity = 0.7;
  buttonAllEl[0].style.color = 'black';
  buttonAllEl[0].style.zIndex = 20;
  buttonAllEl[0].style.backgroundColor = 'white';
  buttonAllEl[1].style.color = 'grey';
  buttonAllEl[1].style.backgroundColor = '#ebf3f8f5';
  buttonAllEl[1].style.zIndex = 0;
};

buttonAllEl[0].addEventListener('click', buttonStartOn);
buttonAllEl[1].addEventListener('click', buttonStopOn);
