"use strict";
let num1 = 10;
console.log(num1);
if (num1 < 50)
    num1 += 10;
console.log(num1);
let arr = [1, 2, 'a'];
let tup = [1, "Abhi"];
;
let mySize = 6;
console.log(mySize);
function Cal(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 1.2;
    return 0;
}
Cal(50000);
let employee = {
    id: 1,
    name: 'emp1',
    retire(date) {
        console.log(date);
    },
};
let textBox = {
    drag() {
    },
    resize() {
    },
};
//# sourceMappingURL=index.js.map