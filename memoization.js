// It's a long running tasks for any bigger number
// It takes a lot resources everytime getting invoked
// So, To optimize it, We can cache the already caculated value for further use

let cache = [];

const getAllDivisors = (n) => {
  if (cache[n] != null) { // check the cache, if available return
    return cache[n];
  }

  let divisors = [];
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    if (n % i == 0) {
      divisors.push(n / i);
    }
  }
  cache[n] = divisors; // save calculation in cache
  return divisors;
};

// console.log(getAllDivisors(200000000));
// console.log(getAllDivisors(200000001));
// console.log(getAllDivisors(200000000));
// console.log(getAllDivisors(200000000));

// Another Good Example

function fib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n];
  }

  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }

  prevValues[n] = result;
  return result;
}

console.log(fib(40));
