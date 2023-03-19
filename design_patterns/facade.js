// It helps in writing clean and well maintainable code
// by preventing code duplicacy

// simple example of using fetch with get method
async function getFetch(url, params = {}) {
  const queryString = Object.entries(params)
    .map((param) => `${param[0]}=${param[1]}`)
    .join("&");

  const res = await fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

// call any get api using this getFetch function
function getUsers(url) {
  return getFetch(url, params);
}

function getUserPost(url, userId) {
  return getFetch(url, { userId: userId });
}
