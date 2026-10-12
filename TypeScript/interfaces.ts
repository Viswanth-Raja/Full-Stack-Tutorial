interface Person {
  name: string;
  age: number;
  password: string;
}

function save(person: Person) {
  console.log(person.name + " has registered");
}

save({ name: "Sophie", age: 13, password: "123" });

// let perosn = Person
// person.name is not accessible since it is just a type definition and read only type

//* if you want to use interfaces , use it as it is done above
