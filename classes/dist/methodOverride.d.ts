declare class Person1 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string);
    getFullName(): string;
    walk(): void;
}
declare class Teacher extends Person1 {
    getFullName(): string;
}
declare let T1: Teacher;
