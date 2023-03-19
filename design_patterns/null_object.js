// This pattern is full to get rid of null check before
// accessing any properties of an object which might be null

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name == "ABC";
  }
}

// create a null version of user class
class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

// all objects
const objects = [new User(1, "ABC"), new User(2, "XYZ")];

function getUser(id) {
  const user = objects.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);
  console.log("Hello " + user.name);
  console.log(
    user.hasAccess() ? "You have accesss." : "You don't have access."
  );
}

// If had to deal with null user, We had to check null everywhere
// we accessing the property of user class
