//! String
let x: string;
x = "Storiant";

//! Number
let y: 15;

//! Boolean
let isCorrect: boolean;
isCorrect = true;
isCorrect = false;

//! Arrays and List
let Countries: String[] = ["Russia", "Ukraine"];
let Numbers: Array<number> = [1, 2];
let t: [string, number] = ["hello", 14];

//! any
let a: any;
a = 8;
a = "hello";
a = [1, 2, "hello"];

//! enum
enum Colors {
  black,
  pink,
  yellow = 6,
  blue,
}

let black = Colors.black; //?  Value = 0
let pink = Colors.pink; //?  Value = 1
let yellow = Colors.yellow; //?  Value = 6
let blue = Colors.blue; //?  Value = 7

//! void
//? You cant return a value

function greeter(): void {
  console.log("hello");
}

//!undefined
let m: number;

//! null

class Product {
  //null here
}

//! Data assertions

let store: string = "Hello";
let len = store.length;

//! Type conversion

let first;
first = "Hello";
console.log((<string>first).length);
first = 1;
console.log((first as number) * 3);
