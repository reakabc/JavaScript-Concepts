const getData = (remainder) => {
  return new Promise((resolve, reject) => {
    //do some task
    if (1 % 2 == remainder) {
      resolve({
        data: [1, 2, 3, 4, 5],
        status: "success",
      });
    } else {
      reject({
        error: "error",
        status: "faluire",
      });
    }
  });
};

const processData = (data = []) => {
  return new Promise((resolve, reject) => {
    if (data.length > 0) {
      resolve(
        data.map((item) => {
          return item * 2;
        })
      );
    } else {
      reject({
        error: "error",
        status: "faluire - 2",
      });
    }
  });
};

// Normal way of dealing with promise
// getData(0)
//   .then((res) => processData(res.data)) //first promise success & return new promise
//   .then((data) => console.log(data)) //second promise success
//   .catch((err) => console.error(err)); //error


// Async-Await
async function doAsyncAwait() {
  try {
    const res = await getData(0);
    const processedData = await processData(res.data);
    console.log(processedData);
  } catch (error) {
    console.error(error);
  }
}

doAsyncAwait();
