// literal
type Quantity = 50 | 100;
let quantity : Quantity = 50;

// Null Type 
function greeting(name:string | null | undefined) {
    if (name?.length) console.log(`Hello ${name}..`);
    else console.log("Hi Buddy");   
}
greeting('Abhi');

// Optional Changing
type Customer = {
    birthDay : Date
}
function getCustomerBirthDay(id:number):Customer | null |undefined {
    return id === 0 ? null :{birthDay: new Date()}
}
let customer = getCustomerBirthDay(0);
console.log(customer?.birthDay?.getFullYear());

// Nullish
let speed :number | null=null
let ride ={
    speed: speed ?? 30
}

// Assertion
let element = <HTMLInputElement>document.getElementById('id'); //as HTMLInputElement;
element.value;
