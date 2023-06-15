class Store <T>{
    public _object : T[] = [];
    add(obj :T):void {
        this._object.push(obj);
    }
}

// Pass generic type parameter
class CompressAble<T> extends Store<T>{
    compress(){}
}
let s = new CompressAble();

// Restrict generic type parameter
class SerachAblestore<T extends {name : string}> extends Store<T>{
    find(name : string) : T | undefined {
        return this._object.find((obj) => obj.name === name)
    }
}

// Fix the generic type
class ProductStore extends Store<Product>{
    findByCategory(category:string) : Product[]{
        return [];
    }

}