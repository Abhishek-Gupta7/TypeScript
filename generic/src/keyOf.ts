interface Product2{
    name : string,
    price : number
}

class Store2 <T>{
    public _object : T[] = [];
    add(obj :T):void {
        this._object.push(obj);
    }

    findObj(property: keyof T , value : unknown){
            this._object.find(val => val[property] === value)
    }
}

let s2 = new Store2();
s2.add({name : 'a' , price : 1});
// s2.findObj('name' , 'a'),
