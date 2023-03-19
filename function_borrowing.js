// functionName.call/apply/bind(ObjectInstance, args[comma seperated, array]);
// In case of constructor/inheritance
// ConstructorFunctionName.call/apply(this -> currentCOnstructorFunction, args[comma seperated, array])

// Call & Apply

const user = {
  name: "Nitish",
  age: 23,
  address: "Jamui, Bihar",
};

const details = function (currentLocation, status) {
  console.log(
    `${this.name} is ${this.age} year old and from ${this.address} and current location is ${currentLocation}. He is ${status}`
  );
};

// only difference between call & apply is the way to pass the arguments
// As described below
details.call(user, "Bangalore", "Open for Job");
details.apply(user, ["Bangalore", "Open for Job"]);

// Bind

// bind method don't call method immediately but return a method which can
// be called later on
// It takes arguments in comma saperated values like call
const getDetails = details.bind(user, "Bangalore", "Open for Job");
getDetails();
