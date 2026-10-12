"use strict";
//! String
let x;
x = "Storiant";
//! Number
let y;
//! Boolean
let isCorrect;
isCorrect = true;
isCorrect = false;
//! Arrays and List
let Countries = ["Russia", "Ukraine"];
let Numbers = [1, 2];
let t = ["hello", 14];
//! any
let a;
a = 8;
a = "hello";
a = [1, 2, "hello"];
//! enum
var Colors;
(function (Colors) {
    Colors[Colors["black"] = 0] = "black";
    Colors[Colors["pink"] = 1] = "pink";
    Colors[Colors["yellow"] = 6] = "yellow";
    Colors[Colors["blue"] = 7] = "blue";
})(Colors || (Colors = {}));
let black = Colors.black; //?  Value = 0
let pink = Colors.pink; //?  Value = 1
let yellow = Colors.yellow; //?  Value = 6
let blue = Colors.blue; //?  Value = 7
//! void
//? You cant return a value
function greeter() {
    console.log("hello");
}
//!undefined
let m;
//! null
class Product {
}
//! Data assertions
let store = "Hello";
let len = store.length;
//! Type conversion
let first;
first = "Hello";
console.log(first.length);
first = 1;
console.log(first * 3);
