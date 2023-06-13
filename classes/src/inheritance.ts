class Person{
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

class Student extends Person{
    constructor(public readonly id : number,
        firstName:string ,
        lastName : string
        ){
            super(firstName,lastName);
    }

    test(){
        console.log('Giving test..');
        
    }
}

let s1 = new Student(1,'John','Johnny');
