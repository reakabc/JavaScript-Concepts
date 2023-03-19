// Function currying using bind

let multiply = function (x, y) {
  console.log("Result: ", x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3);
multiplyByTwo(2);
multiplyByThree(2);

// Function currying using closure

const multiply2 = function (x) {
  return function (y) {
    console.log("Result: ", x * y);
  };
};

let multiplyByTwo2 = multiply2(2);
let multiplyByThree2 = multiply2(3);
multiplyByTwo2(2);
multiplyByThree2(2);

// sum with currying using closure

// advance way
const sum = (a) => (b) => (c) => (d) => a + b + c + d;

// easy way
function sum2(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));
console.log(sum2(1)(2)(3)(4));
