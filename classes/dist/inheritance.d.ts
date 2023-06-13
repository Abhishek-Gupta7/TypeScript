declare class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string);
    getFullName(): string;
    walk(): void;
}
declare class Student extends Person {
    readonly id: number;
    constructor(id: number, firstName: string, lastName: string);
    test(): void;
}
declare let s1: Student;
