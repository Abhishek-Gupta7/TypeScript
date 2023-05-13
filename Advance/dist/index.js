"use strict";
var _a;
let quantity = 50;
function greeting(name) {
    if (name === null || name === void 0 ? void 0 : name.length)
        console.log(`Hello ${name}..`);
    else
        console.log("Hi Buddy");
}
greeting('Abhi');
function getCustomerBirthDay(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
let customer = getCustomerBirthDay(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let element = document.getElementById('id');
element.value;
//# sourceMappingURL=index.js.map