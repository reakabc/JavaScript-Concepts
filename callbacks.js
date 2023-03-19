function getData(success, error) {
  if (1 == 1) {
    success([1, 2, 3, 4]);
  } else {
    error("failed");
  }
}

getData(
  (data) => console.log(data), // first callback function on success
  (err) => console.error(err) // second callback function on error
);

getData(
  onSuccess, // first callback function on success
  onError // second callback function on error
);

function onSuccess(data) {
  console.log(data);
}

function onError(err) {
  console.error(err);
}
