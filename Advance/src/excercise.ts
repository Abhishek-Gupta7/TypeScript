// let users = [
//     {
//     name: 'John Smith',
//     age: 30,
//     occupation: 'Software engineer'
//     },
//     {
//     name: 'Kate Müller',
//     age: 28
//     }
//    ];
// Q1
type UserTemplate = {
    name :String,
    age : number,
    occupation? : String
}

// Q2Birds fly. Fish swim. A Pet can be a Bird or Fish. 
// Use type aliases to represent these

type Bird = {
    fly : () => void
}
type Fish = {
    swim : () => void
}

type Pet = Bird | Fish;

// Q3Define a type for representing the days of week. Valid values are 
// “Monday”, “Tuesday”, etc.
type Weeks = 'Sunday' | 'Monday' | 'Tuseday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

let days : Weeks = 'Sunday'

// Q4 Simplify the following code snippets:
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
// let x = foo !== null && foo !== undefined ? foo : bar(); 

// let user = getUser();
// console.log(user?.address?.street);


function bar(){

}
let foo: String = 'foo';
let x = foo ?? bar();

// Q5 What is the problem in this piece of code?
// let value: unknown = 'a'; 
// console.log(value.toUpperCase());

// value is declared as an unknown type. In order to call methods on an 
// unknown object, we have to use type narrowing first:
let value : unknown = 'a'
if (typeof value === 'string')
    console.log(value.toUpperCase());
    