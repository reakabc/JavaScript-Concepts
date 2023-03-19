const throttle = function (fn, delay) {
  let timeOut;
  return function () {
    let args = arguments;
    if (timeOut) { // cancel new call while previous call is not completed
      return;
    }
    timeOut = setTimeout(() => {
      timeOut = null; // clear time out once completed
      fn.apply(this, args);
    }, delay);
  };
};

function getResponse(text) {
  console.log(`searching for text - ${text}`);
}

const callSearch = throttle(getResponse, 300); //argumnets passed to this method is assigned to target function

document.getElementById("input").addEventListener("keyup", function (e) {
  callSearch(e.target.value);
});
