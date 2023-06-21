interface Product3 {
    name : string,
    price : number
}

type ReadOnly<T> =  {
    readonly [P in keyof T ] : T[P];
}

type Optional<T> = {
    readonly [P in keyof T]?: T[P];
}
let product : ReadOnly<Product3> = {
    name : 'xyz',
    price : 576
}
// ProductStore.name= ''