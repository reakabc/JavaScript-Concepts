// ES5

// Object of prototypes

const protos = {
  getDetails: function () {
    console.log(
      `${this.title} is written by ${this.author} and published on ${this.year}`
    );
  },
  getAuthor: function () {
    console.log(`${this.title} is written by ${this.author}`);
  },
};

// #1
const book1 = Object.create(protos);
book1.title = "MagZag-2";
book1.author = "Jene Doe";
book1.year = 2014;

book1.getAuthor();
book1.getDetails();

// #2
const book2 = Object.create(protos, {
  title: { value: "MagZag - 3" },
  author: { value: "John Doe" },
  year: { value: 2015 },
});

book2.getAuthor();
book2.getDetails();
