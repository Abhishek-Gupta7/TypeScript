//Q1. Convert the function below to a generic 
// function:functionecho(arg) { returnarg; }

function echo<T>(arg :T) :T{ 
    return arg; 
}

// Q2. When compiling the following piece of code, we get an error saying 
// ‘Property name does not exist on type T’. How can we solve this problem?
function printName<T extends {name : string}>(obj : T ){
    console.log(obj.name);
}

// Q3 An Entity should have a unique identifier. The type of identifier, however, 
// is dependent on the use case. In some cases, the ID might be a number, in other 
// cases, it might be a string, GUID, etc. Represent the entity using a generic class. 
class Entity<T>{
    constructor(public value: T) {
        
    }
}

//Q4. Given the following interface, what does keyof User return?
// It returns a union of the properties of User: ‘userId’ | ‘username’
