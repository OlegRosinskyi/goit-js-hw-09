// commonjs
//const flatpickr = require('flatpickr');

// es modules are recommended, if available, especially for typescript
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
const inputEl = document.querySelector('#datetime-picker');

const daysRef = document.querySelector('div [data-days]');

const hoursRef = document.querySelector('div [data-hours]');
const minutesRef = document.querySelector('div [data-minutes]');
const secondsRef = document.querySelector('div [data-seconds]');

const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('.timer');
const fieldEl = document.querySelector('.field');
const fieldAllEls = document.querySelectorAll('.field');
const valueEls = document.querySelectorAll('.value');
const labelEls = document.querySelectorAll('.label');

timerEl.classList.add('timer_my');
fieldAllEls.forEach(fieldAllEl => {
  fieldAllEl.classList.add('field_my');
});
valueEls.forEach(valueEl => {
  valueEl.classList.add('value_my');
});
labelEls.forEach(labelEl => {
  labelEl.classList.add('label_my');
});

// 2. створюємо константи: Одна хвилина, одна година, один день
const oneMinute = 1000 * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
let selectData = 0;
let idSetInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log('hello', selectedDates[0] - options.defaultDate);

    const diff = selectedDates[0] - options.defaultDate;
    if (diff < 0) {
      return alert('Please choose a date in the future');
    } else {
      selectData = selectedDates[0];
    }
  },
};
flatpickr(inputEl, options);

const onTimeCount = () => {
  idSetInterval = setInterval(callback, 1000);
  buttonEl.classList.add('button_my');
};

buttonEl.addEventListener('click', onTimeCount);

const callback = () => {
  const todayDate = new Date();
  const diff = selectData - todayDate;
  if (diff >= 0) {
    const days = Math.floor(diff / oneDay);
    const hours = Math.floor((diff % oneDay) / oneHour);
    const minutes = Math.floor((diff % oneHour) / oneMinute);
    const seconds = Math.floor((diff % oneMinute) / 1000);

    daysRef.textContent = days.toString().padStart(2, '0');
    hoursRef.textContent = hours.toString().padStart(2, '0');
    minutesRef.textContent = minutes.toString().padStart(2, '0');
    secondsRef.textContent = seconds.toString().padStart(2, '0');
  } else clearTimeout(idSetInterval);
};
