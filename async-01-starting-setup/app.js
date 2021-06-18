const button = document.querySelector('button');
const output = document.querySelector('p');


const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success)
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  // navigator.geolocation.getCurrentPosition(
  //   (posData) => {
  //     // setTimeout(() => {
  //     //   console.log(posData);
  //     // }, 5000);
  //     setTimer(2000).then(data => {
  //       console.log(data, posData);
  //     });
  //   },
  //   (erro) => {
  //     console.log(erro);
  //   }
  // );
  // need to get out of message queue before event tasks
  // setTimeout(() => {
  //   console.log('Timer Done!')
  // }, 0)
  let positionData; 
  getPosition()
    .then((result)=> {
       positionData = result;
       return setTimer(2000);
    })
    .catch(err => {
      console.log('promise return:',err);
      return 'on we go...'
    }) 
    .then(data => {
      console.log('print log',data, positionData);
    })
    .finally(p => {console.log('finally.', p)}); // 'finally' is optional (no need to include).
    console.log('Tracking user position...');
}

button.addEventListener('click', trackUserHandler);


// let result = 0;
// for (let i = 0; i < 1000000000; i++) {
//   result += i;
// }

// console.log(result)