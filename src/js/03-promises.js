const formEl = document.querySelector('.form');
const buttonEl = document.querySelector('button');
//console.log(buttonEl);

const resultPromis = [];

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  //console.log(shouldResolve);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        //resolve(`✅ Fulfilled promise ${position} in ${delay}ms`); // Fulfill
        //resolve(position)(delay);
        resolve({ position: position, delay: delay });
      } else {
        //reject(`❌ Rejected promise ${position} in ${delay}ms`); // Reject
        // resolve(position);
        reject({ position: position, delay: delay });
      }
    }, delay);
  });

  promise
    .then(result => {
      //console.log(result);
      resultPromis[position - 1] = result;
      //resultPromis[position - 1].delay = result;
      // alert(`✅ "${result}"`);
      console.log(resultPromis);
    })
    .catch(error => {
      resultPromis[position - 1] = error;
      console.log(resultPromis);
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

  // console.log(`email: ${email.value}, Password: ${password.value}`);
  const delayF = delay.valueAsNumber;
  const stepF = step.valueAsNumber;
  const amountF = amount.valueAsNumber;

  for (let i = 1; i < amountF + 1; i += 1) {
    resultPromis.push({});
    createPromise(i, delayF + stepF * (i - 1));
  }
  event.currentTarget.reset();
};

//formEl.addEventListener('input', inputForm);
formEl.addEventListener('submit', onSubmit);
