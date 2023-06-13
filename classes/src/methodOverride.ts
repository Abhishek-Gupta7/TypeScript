class Person1{
    constructor(public firstName:string,
        public lastName:string
        ) {    
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    walk(){
        console.log('Walking..');
    }
}

class Teacher extends Person1{
    override getFullName(): string {
        return `Professor ${super.getFullName()}`;
    }
}
let T1 = new Teacher('John','Smith');
console.log(T1.getFullName());

