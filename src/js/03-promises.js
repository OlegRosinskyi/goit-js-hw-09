const formEl = document.querySelector('.form');
const buttonEl = document.querySelector('button');
//console.log(buttonEl);
const dataForm = {
  delayF: (delayF = 0),
  stepF: (stepF = 0),
  amountF: (amountF = 0),
};
const resultPromis = [];

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    //console.log(shouldResolve);

    const promise = new Promise((resolve, reject) => {
      if (shouldResolve) {
        //resolve(`✅ Fulfilled promise ${position} in ${delay}ms`); // Fulfill
        //resolve(position)(delay);
        resolve({ position: position, delay: delay });
      } else {
        //reject(`❌ Rejected promise ${position} in ${delay}ms`); // Reject
        // resolve(position);
        resolve({ position: position, delay: delay });
      }
    });
    promise.then(
      result => {
        //console.log(result);
        resultPromis[position - 1] = result;
        //resultPromis[position - 1].delay = result;
        // alert(`✅ "${result}"`);
        console.log(resultPromis);
      },
      error => {
        // console.log(error);
        // alert(`❌ "${error}"`);
        resultPromis[position - 1] = error;
        //resultPromis[position - 1].delay = error;
        console.log(resultPromis);
      }
    );
  }, delay);
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

  dataForm.delayF = delay.valueAsNumber;
  dataForm.stepF = step.valueAsNumber;
  dataForm.amountF = amount.valueAsNumber;
  console.log(dataForm);

  for (let i = 1; i < dataForm.amountF + 1; i += 1) {
    resultPromis.push({});
    createPromise(i, dataForm.delayF + dataForm.stepF * (i - 1));
  }
  event.currentTarget.reset();
};

//formEl.addEventListener('input', inputForm);
formEl.addEventListener('submit', onSubmit);
