"use strict";
class Car {
    brand;
    model;
    color;
    YOM;
    constructor(brand, model, color, YOM) {
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
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    save() {
        console.log("Registration Successful Mr." + this.name);
    }
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
    name;
    constructor(name) {
        this.name = name;
    }
    get GetName() {
        return this.name;
    }
    set SetName(name) {
        this.name = name;
    }
    save() {
        console.log("Registration Successful Mr." + this.name);
    }
}
let person = new Person2("");
person.SetName = "Stephen";
console.log(person.GetName);
