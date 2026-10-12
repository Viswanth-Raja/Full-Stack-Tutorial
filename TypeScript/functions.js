"use strict";
function getSum(x, y, z) {
    return x + y + z;
}
let getProd = function (x, y) {
    return x * y;
};
//! Optional Parameters
function getSum2(x, y, z) {
    if (z)
        return x + y + z;
    else
        return x + y;
}
//! Default Parameters
function getSum3(x, y, z = 5) {
    return x + y + z;
}
// console.log(getSum2(5, 6));
// console.log(getSum3(5, 8));
// console.log(getSum3(5, 8, 0));
//! rest Parameter
function getAverage(first, ...x) {
    let count = 1;
    let total = first;
    for (let i = 0; i < x.length; i++) {
        total += x[i];
        count++;
    }
    let result = total / count;
    return result;
}
console.log(getAverage(10));
console.log(getAverage(10, 20));
console.log(getAverage(10, 20, 30));
console.log(getAverage(10, 20, 30, 40));
