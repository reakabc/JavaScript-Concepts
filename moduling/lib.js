export default function fib(n, prevValues = []) {
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

let cache = [];
export const getAllDivisors = (n) => {
  if (cache[n] != null) {
    // check the cache, if available return
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
