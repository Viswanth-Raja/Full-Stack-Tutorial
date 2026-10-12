/*console.log("Hello from separate file!");

var schoolTeam = "Apex";
var schoolNumber = 20;

console.log(schoolNumber + " " + schoolTeam);

alert(
  "Welcome to " +
    schoolTeam +
    " School! We have " +
    schoolNumber +
    " students.",
);
var studentName = prompt("What is your name?");
//prompt always returns a string, so we don't need to worry about converting it to a string.

console.log("Student name: " + studentName);

alert(
  "Nice to meet you, " +
    studentName +
    "! We hope you enjoy your time at " +
    schoolTeam +
    " School.",
);*/

// //! OPERATORS

// var x = 10;
// console.log(x == "10"); //true, because the value is the same, even though the type is different
// console.log(x === "10"); //false, because the value is the same, but the type is different
// console.log(x != "10"); //false, because the value is the same, even though the type is different
// console.log(x !== "10"); //true, because the value is the same, but the type is different
// console.log(x == "hello"); //false, because the value is different, even though the type is the same

// //! Conditional statements

// var personAge = 21;

// if (personAge < 18) {
//   console.log("he/she cannot enter the cafe");
// } else if (personAge >= 18 && personAge < 23) {
//   console.log("he/she can enter the cafe but cannot drink alcohol");
// } else {
//   console.log("he/she can enter the cafe and drink alcohol");
// }

// //? Switch statement

// var AlexAvg = (90 + 80 + 95) / 3;
// var SaraAvg = (89 + 76 + 98) / 3;
// var NancyAvg = (42 + 98 + 83) / 3;

// switch (true) {
//   case AlexAvg > SaraAvg && AlexAvg > NancyAvg:
//     console.log("Alex has the highest average score: " + AlexAvg);
//     break;
//   case SaraAvg > AlexAvg && SaraAvg > NancyAvg:
//     console.log("Sara has the highest average score: " + SaraAvg);
//     break;
//   case NancyAvg > AlexAvg && NancyAvg > SaraAvg:
//     console.log("Nancy has the highest average score: " + NancyAvg);
//     break;
//   default:
//     console.log("There is a tie between the students.");
// }

// //!                            FUNCTIONS                            //

// function subtract(a, b) {
//   return a - b;
// }

// console.log(subtract(10, 5)); // Output: 5

// var isOdd = function (num) {
//   if (num % 2 !== 0) {
//     return true;
//   } else return false;
// };

// console.log(isOdd(3)); // Output: true

// var addition = function (a) {
//   let sum = 0;
//   for (var i = 1; i <= a; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(addition(5)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

// //?Variable scope

// if (true) {
//   var x = 10;
// }

// console.log(x); // Output: 10, because var is function-scoped, not block-scoped

// if (true) {
//   let y = 20;
// }
// console.log(y); // Output: ReferenceError: y is not defined, because let is block-scoped

// //!Arrays

// var emptyArray = [];
// var emptyArray2 = new Array();

// var mixedType = [
//   1,
//   "hello",
//   true,
//   null,
//   undefined,
//   { name: "John" },
//   [1, 2, 3],
// ];
// console.log(mixedType.length);

// var fruits = ["apple", "banana", "orange"];
// fruits[3] = "grape";
// console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// fruits[8] = "kiwi";
// console.log(fruits); // Output: ["apple", "banana", "orange", "grape", empty × 4, "kiwi"]

// //? Array methods

// var students = ["Alice", "Bob", "Charlie"];

// //*push method adds an element to the end of the array

// students.push("David");
// console.log(students); // Output: ["Alice", "Bob", "Charlie", "David"]

// //*pop method removes the last element from the array and returns it

// var lastStudent = students.pop(); // removes the last element from the array
// console.log(students); // Output: ["Alice", "Bob"]
// console.log(lastStudent); // Output: "Charlie"

// //* unshift method adds an element to the beginning of the array

// var cats = ["Whiskers", "Fluffy", "Mittens"];

// cats.unshift("Shadow");
// console.log(cats); // Output: ["Shadow", "Whiskers", "Fluffy", "Mittens"]

// //* shift method removes the first element from the array and returns it

// var firstCat = cats.shift();
// console.log(cats); // Output: ["Whiskers", "Fluffy", "Mittens"]
// console.log(firstCat); // Output: "Shadow"

// //* indexOf method returns the index of the first occurrence of a specified element in the array,
// //* or -1 if it is not found

// var fruits = ["apple", "banana", "orange", "grape"];
// console.log(fruits.indexOf("banana")); // Output: 1
// console.log(fruits.indexOf("kiwi")); // Output: -1, because "kiwi" is not in the array

// //* slice method returns a shallow copy of a portion of an array into a new array object
// //* selected from start to end (end not included)

// var numbers = [1, 2, 3, 4, 5];

// //* Syntax: array.slice(start, end)
// var slicedNumbers = numbers.slice(1, 4);
// console.log(slicedNumbers); // Output: [2, 3, 4], because it includes the elements from index 1 to index 3 (end not included)
// console.log(numbers); // Output: [1, 2, 3, 4, 5], because the original array is not modified by the slice method

// var slicedNumbers2 = numbers.slice(2);
// console.log(slicedNumbers2); // Output: [3, 4, 5], because it includes the elements from index 2 to the end of the array
// var slicedNumbers3 = numbers.slice(-3);
// console.log(slicedNumbers3); // Output: [3, 4, 5], because it includes the last 3 elements of the array
// var slicedNumbers4 = numbers.slice();
// console.log(slicedNumbers4); // Output: [1, 2, 3, 4, 5], because it creates a shallow copy of the entire array

// //? Array iteration methods

// //* forEach Syntax: array.forEach(function(currentValue, index, array) { ... })

// var books = [
//   "The Great Gatsby",
//   "To Kill a Mockingbird",
//   "1984",
//   "The Catcher in the Rye",
// ];

// books.forEach((book, index) => {
//   console.log(index + ": " + book);
// });

// //! Exercise

// //*Print all the numbers from 1 to 20 in an array, and then print
// //*only the numbers that are divisible by 5 using forEach method.

// var arrayOnetoTwenty = new Array();

// for (var i = 0; i <= 20; i++) {
//   arrayOnetoTwenty.push(i);
// }

// console.log("Array : " + arrayOnetoTwenty);

// arrayOnetoTwenty.forEach((value) => {
//   if (value % 5 === 0) console.log(value);
// });

// //! OBJECTS

// var person = {
//   name: "John",
//   age: 30,
//   isStudent: false,
// }

// //? accessing object properties

// console.log(person.name); // Output: "John"
// console.log(person["age"]); // Output: 30

// //? Object update

// var student3 = {
//   name: "Charlie",
//   age: 22,
//   isStudent: true,
//   bestfriends: ["Leonardo", "Raphael", "Donatello", "Michelangelo"],
//   bestfriend: {
//     name: "Leonardo",
//     age: 23,
//     isStudent: true,
//   },
// };

// student3.age += 1;
// console.log(student3);

// //* How to add a new property to an object

// var car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
// };
// car.color = "red"; // Adding a new property 'color' to the car object
// console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'red' }

// //! Array of objects

// var students = [
//   { name: "Alice", age: 20, isStudent: true },
//   {
//     name: "Bob",
//     age: 25,
//     isStudent: false,
//   },
//   {
//     name: "Charlie",
//     age: 22,
//     isStudent: true,
//   },
// ];
// students.forEach((student) => {
//   console.log(student.name + " is " + student.age + " years old.");
// });

// //! Exercise

// universities = [
//   {
//     name: "Harvard University",
//     hasGone: true,
//     year: 1986,
//   },
//   {
//     name: "Stanford University",
//     hasGone: false,
//     year: null,
//   },
//   {
//     name: "Massachusetts Institute of Technology",
//     hasGone: false,
//     year: null,
//   },
//   {
//     name: "University of California, Berkeley",
//     hasGone: true,
//     year: 1990,
//   },
// ];

// universities.forEach((element) => {
//   element.hasGone
//     ? console.log("Name: " + element.name + ", Year: " + element.year)
//     : console.log("Name: " + element.name);
// });

// //? Object Methods

// var person = {
//   name: "John",
//   age: 30,
//   isStudent: false,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };

// person.greet(); // Output: "Hello, my name is John"

// //* How to add a method to an existing object

// person.sayGoodbye = function () {
//   console.log("Goodbye from " + this.name);
// };

// person.sayGoodbye(); // Output: "Goodbye from John"

// //? 'this' Keyword

// console.log(this); // Output: Window object (in a browser environment)

// var person = {
//   name: "John",
//   age: 30,
//   isStudent: false,
//   thisObject: function () {
//     console.log(this); // Output: person object, because 'this' refers to the object that is calling the method
//   },
// };

// person.thisObject(); // Output: person object

// var anotherPerson = {
//   name: "Alice",
//   age: 25,
//   isStudent: true,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);

//     function sayGoodbye() {
//       console.log(this); //this is a function and returns a Global object since it is not under a object but under a function
//     }
//   },
// };

// anotherPerson.greet();
