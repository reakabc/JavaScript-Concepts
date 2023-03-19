// ES5

// constructor function
function User(name, address, age) {
  this.name = name;
  this.address = address;
  this.age = age;
//   this.getBio = function () {
//     console.log(
//       `${this.name} is ${this.age} years old is from ${this.address}` //string literal
//     );
//   };
}

const user = new User("Nitish", "Jamui, Bihar", 23);

