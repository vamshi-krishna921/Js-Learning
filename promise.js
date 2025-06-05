let name = "Ganesh";
let stud = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSucces = Math.random > 0.3;
      if (isSucces) {
        resolve(`Enrollment of ${name} successful`);
      } else {
        reject(`Enrollment failed`);
      }
    }, 2000);
  });
};
stud(name)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Operation successful.");
  });

// output
// ( After 2 secs)
// Enrollment of Ganesh successful
// Operation successful.

//TODO promise.all method returns a single Promise from a list of promises, when all promises fulfill.
const promsie1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 1000);
});
const promsie2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2");
  }, 3000);
});
const promsie3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise3");
  }, 1000);
});
// Output (if all are resolved) (after 3 secs the output comes)
//[ 'Promise1', 'Promise2', 'Promise3' ]
const promsie4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failed");
  }, 1000);
});
//*Promise.all([promsie1, promsie2, promsie3, promsie4])
//*  .then((prom) => {
//*   console.log(prom);
//*  })
//* .catch((err) => {
//*   console.log(err);
//* });
// Output (if any one is rejected)
// Failed

//TODO allSettled() method returns a single Promise from a list of promises, when all promises settled.
Promise.allSettled([promsie1, promsie2, promsie3, promsie4])
  .then((prom) => {
    console.log(prom);
  })
  .catch((err) => {
    console.log(err);
  });

// output
/* [
  { status: 'fulfilled', value: 'Promise1' },
  { status: 'fulfilled', value: 'Promise2' },
  { status: 'fulfilled', value: 'Promise3' },
  { status: 'rejected', reason: 'Failed' }
] */

//TODO race() method returns a Promise from a list of promises, when the faster promise settles.
Promise.race([promsie1, promsie2, promsie3, promsie4])
  .then((prom) => {
    console.log(prom);
  })
  .catch((err) => {
    console.log(err);
  });
// Output 
// Promise1 