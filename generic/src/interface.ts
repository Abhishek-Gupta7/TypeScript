
interface Result<T>{
    data : T | null;
    error : string | null;
}

function fetchData<T>(url:string) : Result<T>{
    return {data : null , error : null};
}

interface User{
    name : string
}
interface Product{
    description : string
}

let result1 = fetchData<User>('ulr');
result1.data?.name;
let result2 = fetchData<Product>('ulr');
result2.data?.description;