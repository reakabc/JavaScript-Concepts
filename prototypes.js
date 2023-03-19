// ES5

// prototype
// whenever we need to attach any method to the object/constructor function
// we can use this prototype

// add getBio method to User constructor function

User.prototype.getBio = function () {
  console.log(
    `${this.name} is ${this.age} years old is from ${this.address}` //string literal
  );
};

User.prototype.setAge = function (age) {
  this.age = age;
};

// user.setAge(24);
// user.getBio();

// Inheritance type stuff

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getDetails = function () {
  console.log(
    `${this.title} is written by ${this.author} and published on ${this.year}`
  );
};

function Magzine(title, author, year, month) {
  Book.call(this, title, author, year); 
//   Book.apply(this, [title, author, year]); //both are same
  this.month = month;
}

// const mag = new Magzine("MAGZAG", "John Doe", 2013, "April");
// console.log(mag); 
 
// mag.getDetails(); // Error - We haven't created any prototype for Magzine yet
                     // We can use prototype of Book only after we copy/inherit


Magzine.prototype = Object.create(Book.prototype); // Need to put it before initialization 
// Now. Constructor is changed to Book
Magzine.prototype.constructor = Magzine

const mag = new Magzine("MAGZAG", "John Doe", 2013, "April");
mag.getDetails() //Now it is accessible
// console.log(mag);


console.log(mag);