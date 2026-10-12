"use strict";
//!Generics in function
function itReturns(x) {
    return x;
}
itReturns(8);
itReturns("Hello");
//!Generics in Class
class prints {
    variable;
    constructor(variable) {
        this.variable = variable;
    }
    save(x) {
        return x;
    }
}
let stringPrinter = new prints("");
stringPrinter.save("Hello");
let numberPrinter = new prints(0);
numberPrinter.save(5);
