// Basic syntax of promise

// const promise = new Promise((resolve, reject) => {
//   //do some task
//   if (1 % 2 == 0) {
//     resolve({
//       status: true,
//       message: "success",
//     });
//   } else {
//     reject({
//       status: false,
//       message: "faluire",
//     });
//   }
// });

// promise.then((res) => console.log(res)).catch((err) => console.error(err));

// We mostly use with function as below

const doPromise = (remainder) => {
  return new Promise((resolve, reject) => {
    //do some task
    if (1 % 2 == remainder) {
      resolve({
        status: true,
        message: "success",
      });
    } else {
      reject({
        status: false,
        message: "faluire",
      });
    }
  });
};

doPromise(1)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
