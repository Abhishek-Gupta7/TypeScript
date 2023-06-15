//Q1. Define a class called Logger that takes the name of a file in its 
// constructor and provides a method for writing messages to that file. 
// Don’t worry about the actual file I/O operations. Just define the 
// class with the right members. 

class Logger{
    constructor(private _fileName:string) {
    }

    writeMessage(msg : string) : void{
        this._fileName = msg;
    }
}
//Q2. Given the Person class below, create a getter for getting the 
// full name of a person
// class Person { constructor(publicfirstName:string, 
//     publiclastName:string) {}}

class People { 
    constructor(public firstName:string, 
        public lastName:string) {}
        get fullName():string{
                return `${this.firstName} ${this.lastName}`
        }
}

//Q3. Create a new class called Employee that extends Person and adds a 
// new property called salary.

class Employee extends People{
    constructor(public salary:number,
            firstName:string,
            lastName : string
        ) {
        super(firstName,lastName);
    }
}

// Q3.What is the difference between private and protected members?Privatemembers are not
//  inherited by child classes. 
// Given the data below, define an interface for representing employees: 
// letemployee = {
//     name:'John Smith',
//     salary:50_000,
//     address:{street:'Flinders st',city:'Melbourne',zipCode:3144,},
// };
interface Address{
    street:string,
    city : string,
    zipcode: number
}

interface Employees extends Address{
    name : string,
    salary : number,
    address : Address
}

class Emp implements Employees{
    // name: string;
    // salary: number;
    // address: Address;
    // street: string;
    // city: string;
    // zipcode: number;
    constructor(public name:string,
        public salary:number,
        public address:{
            street : string,
            city : string,
            zipcode : number
        },
        public street : string,
        public city : string,
        public zipcode : number
        ) {
        
    }
}




