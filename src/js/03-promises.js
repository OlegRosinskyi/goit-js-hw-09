const formEl = document.querySelector('.form');
const dataForm = {
  delay: (delay = 2000),
  step: (step = 1000),
  amount: (amount = 3),
};
const resultPromis = [];

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve);
    console.log(position);

    const promise = new Promise((resolve, reject) => {
      if (shouldResolve) {
        //resolve(`✅ Fulfilled promise ${position} in ${delay}ms`); // Fulfill

        //resolve(position)(delay);
        resolve(delay, position);
      } else {
        //reject(`❌ Rejected promise ${position} in ${delay}ms`); // Reject
        // resolve(position);
        resolve(delay, position);
      }
    });
    promise.then(
      result => {
        console.log(result);
        resultPromis[position - 1].position = result;
        resultPromis[position - 1].delay = result;
        // alert(`✅ "${result}"`);
        console.log(resultPromis);
      },
      error => {
        console.log(error);
        // alert(`❌ "${error}"`);
        resultPromis[position - 1].position = error;
        resultPromis[position - 1].delay = error;
        console.log(resultPromis);
      }
    );
  }, delay);
}

for (let i = 1; i < dataForm.amount + 1; i += 1) {
  resultPromis.push({});
  createPromise(i, delay + dataForm.step * i);
}

//const timerId = setInterval(callback, delay, arg1, arg2, ...);
//-----------------------------------------------------------------------------
//const isSuccess = true;

//const promise = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    if (isSuccess) {
//      resolve('Success! Value passed to resolve function');
//    } else {
//      reject('Error! Error passed to reject function');
//    }
//  }, 2000);
//});
