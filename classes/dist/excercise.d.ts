declare class Logger {
    private _fileName;
    constructor(_fileName: string);
    writeMessage(msg: string): void;
}
declare class People {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string);
    get fullName(): string;
}
declare class Employee extends People {
    salary: number;
    constructor(salary: number, firstName: string, lastName: string);
}
interface Address {
    street: string;
    city: string;
    zipcode: number;
}
interface Employees extends Address {
    name: string;
    salary: number;
    address: Address;
}
declare class Emp implements Employees {
    name: string;
    salary: number;
    address: {
        street: string;
        city: string;
        zipcode: number;
    };
    street: string;
    city: string;
    zipcode: number;
    constructor(name: string, salary: number, address: {
        street: string;
        city: string;
        zipcode: number;
    }, street: string, city: string, zipcode: number);
}
