// ES5

// Object Literal
const user = {
  name: "Nitish",
  address: "Jamui, Bihar",
  age: 23,
  getBio: function () {
    console.log(
      `${this.name} is ${this.age} years old is from ${this.address}` //string literal
    );
  },
};

user.getBio();
//get All keys as array
console.log(Object.keys(user));
//get all values as array
console.log(Object.values(user));
