const debounce = function (fn, delay) {
  let timeOut;
  return function () {
    let args = arguments;
    clearTimeout(timeOut); //clear previous call
    timeOut = setTimeout(() => {
      //create new one & wait for time duration as delay
      fn.apply(this, args);
    }, delay);
  };
};

function getResponse(text) {
  console.log(`searching for text - ${text}`);
}

const callSearch = debounce(getResponse, 300);
// argumnets passed to this method is assigned to target function
// search keywords passed to callSearch
// this keywords will be accessed in debounce method
// now, this keywords will be assigned to passed function as a params ie. getResponse

// for function with callback
const debounce2 = (fn, d) => {
  let timeout;
  return function () {
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return fn.apply(this, [...args]);
    }, d);
  };
};

function callback(params) {
  console.log(params);
}

async function getPostByKeyword(keyword, callback) {
  res = await fetch("https://api.nationalize.io?name=" + keyword);
  callback(await res.json());
}

const getResult = debounce2(getPostByKeyword, 300);

document.getElementById("input").addEventListener("keyup", function (e) {
  getResult(e.target.value, callback);
});
