//!Generics in function

function itReturns<T>(x: T): T {
  return x;
}

itReturns(8);
itReturns("Hello");

//!Generics in Class

class prints<T> {
  variable: T;
  constructor(variable: T) {
    this.variable = variable;
  }
  save(x: T): T {
    return x;
  }
}

let stringPrinter = new prints<String>("");
stringPrinter.save("Hello");

let numberPrinter = new prints<number>(0);
numberPrinter.save(5);
