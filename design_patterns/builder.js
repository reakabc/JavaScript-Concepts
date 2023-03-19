class User {
  constructor(name) {
    this.name = name;
  }
}

class Address {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  age(age) {
    this.user.age = age;
    return this;
  }

  address(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const user = new UserBuilder("XYZ")
  .age(23)
  .address(new Address("Jamui", "Bihar"))
  .build();
console.log(user);
