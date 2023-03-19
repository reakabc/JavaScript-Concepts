// ES6

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  static getKeys() {
    console.log(["title", "author", "year"]);
  }
}

const book1 = new Book("Happy Coding", "Nitish", 2022);
console.log(book1);

// Calling of static methods
Book.getKeys();

// Inheritance
class Magzine extends Book{
    constructor(title, author, year, month) {
       super(title, author, year);
       this.month = month
    }
}

// static method is accessible to child class
Magzine.getKeys();

// object of child class
const mag = new Magzine("Mag - Start", "John Doe", 2021, "May");
console.log(mag)

// console.log(book1 instanceof Magzine);




