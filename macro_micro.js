// macro task -> (Callback Queue) (Lowest Priority)
setTimeout(() => {
  console.log("Task1 - Completed");
});

// micro task -> (Microtask Queue) (Second Highest Priority)
const promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => console.log("Task2 - Completed"));

// main task -> (Global Execution Context) (Top Priority)
console.log("Main Task Completed");
