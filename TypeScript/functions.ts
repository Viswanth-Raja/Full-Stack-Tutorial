function getSum(x: number, y: number, z: number): number {
  return x + y + z;
}

let getProd = function (x: number, y: number): number {
  return x * y;
};

//! Optional Parameters

function getSum2(x: number, y: number, z?: number): number {
  if (z) return x + y + z;
  else return x + y;
}

//! Default Parameters

function getSum3(x: number, y: number, z: number = 5): number {
  return x + y + z;
}

// console.log(getSum2(5, 6));
// console.log(getSum3(5, 8));
// console.log(getSum3(5, 8, 0));

//! rest Parameter

function getAverage(first: number, ...x: number[]): number {
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
