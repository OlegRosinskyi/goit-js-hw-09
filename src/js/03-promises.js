const formEl = document.querySelector('.form');
const buttonEl = document.querySelector('button');
//console.log(buttonEl);

const resultPromis = [];

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  //console.log(shouldResolve);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const onSubmit = event => {
  event.preventDefault();
  console.log(event.type);
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  if (delay.value === '' || step.value === '' || amount.value === '') {
    return alert('Заповнить всі поля форми>');
  }

  const delayF = delay.valueAsNumber;
  const stepF = step.valueAsNumber;
  const amountF = amount.valueAsNumber;

  for (let i = 1; i < amountF + 1; i += 1) {
    resultPromis.push({});
    createPromise(i, delayF + stepF * (i - 1))
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  event.currentTarget.reset();
};

//formEl.addEventListener('input', inputForm);
formEl.addEventListener('submit', onSubmit);
