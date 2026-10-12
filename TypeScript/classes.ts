class Car {
  brand: string;
  model: string;
  color: string;
  YOM: number;

  constructor(brand: string, model: string, color: string, YOM: number) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.YOM = YOM;
  }

  year() {
    console.log(this.YOM);
  }
}

// let car = new Car("Toyota", "SX6", "SilverBlack", 1903);
// car.year();
// console.log(car.brand);

//! Inheritance

class Person {
  save() {
    console.log("Registration Successful");
  }
}

class Customer extends Person {
  sale() {
    console.log("Sales Permitted");
  }
}

class Employee extends Person {
  salary() {
    console.log("Salary Credited");
  }
}

let emp = new Employee();
emp.save;

//! Public,Private and Protected

class Person1 {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  save() {
    console.log("Registration Successful Mr." + this.name);
  }

  //? You can use name here
  //? You can use age here
}

//? You can't use name here
//? You can't use age here

class Customer1 extends Person1 {
  sale() {
    console.log("Sales Permitted");
  }

  //? You can't use name here
  age = 13; //? You can use age here
}

//! Getter and Setter

class Person2 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get GetName() {
    return this.name;
  }

  set SetName(name: string) {
    this.name = name;
  }

  save() {
    console.log("Registration Successful Mr." + this.name);
  }
}

let person = new Person2("");

person.SetName = "Stephen";

console.log(person.GetName);
