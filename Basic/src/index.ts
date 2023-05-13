let num1: number = 10;
console.log(num1);
if (num1 < 50)
    num1+= 10;
console.log(num1);

let arr = [1,2,'a'];
// tuples
let tup:[number,string] = [1,"Abhi"];

const enum Size {Small = 5,Medium,Large};
let mySize = Size.Medium;
console.log(mySize);

function Cal(income:number,taxYear = 2023) : number {

    if(taxYear < 2023)
        return income * 1.2;
    return 0;
}

Cal(50_000)

// type alias
type Employee = {
    readonly id:number,
    name:string,
    retire : (date:Date) => void
}
// Object
let employee: Employee = {
    id:1,
    name:'emp1',
    retire(date) {
        console.log(date);    
    },
};
// employee.id = 6;

// Intersection

type Draggable = {
    drag:() => void
}

type ResizeAble = {
    resize : () => void
}


let textBox :Draggable & ResizeAble = {
    drag() {
        
    },
    resize() {
        
    },
}
let num1: number = 10;
console.log(num1);
if (num1 < 50)
    num1+= 10;
console.log(num1);

let arr = [1,2,'a'];
// tuples
let tup:[number,string] = [1,"Abhi"];

const enum Size {Small = 5,Medium,Large};
let mySize = Size.Medium;
console.log(mySize);

function Cal(income:number,taxYear = 2023) : number {

    if(taxYear < 2023)
        return income * 1.2;
    return 0;
}

Cal(50_000)

// type alias
type Employee = {
    readonly id:number,
    name:string,
    retire : (date:Date) => void
}
// Object
let employee: Employee = {
    id:1,
    name:'emp1',
    retire(date) {
        console.log(date);    
    },
};
// employee.id = 6;

// Intersection

type Draggable = {
    drag:() => void
}

type ResizeAble = {
    resize : () => void
}


let textBox :Draggable & ResizeAble = {
    drag() {
        
    },
    resize() {
        
    },
}
