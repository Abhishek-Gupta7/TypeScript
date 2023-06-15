// interface Person {
//     name : string
// }
// function echo<T extends Person> (value : T) :T{
//     return value;
// }
// echo({name :' ji'});

class Person {
    constructor(public name : string) {
    }
}
class Customer extends Person{
    constructor(name :string) {
        super(name)
    }
}
function echo<T extends Customer>(value:T):T{
    return value;
}
echo(Customer);