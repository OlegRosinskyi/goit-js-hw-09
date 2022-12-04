const buttonAllEl = document.querySelectorAll('button');
const bodyEl = document.querySelector('body');

let timerId = null;

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
  }, 1000);
};
const buttonStopOn = event => {
  console.log('hello stop');
  clearInterval(timerId);
};

buttonAllEl[0].addEventListener('click', buttonStartOn);
buttonAllEl[1].addEventListener('click', buttonStopOn);
