class Account{
    // readonly id : number;
    // owner : string;
    // private _amount : number;
    nickName? : string;
    constructor(public readonly id : number ,
        public owner : string,
        private _amount : number,
        private _phone : number) {
        // this.id = id;
        // this.owner = owner;
        // this._amount = amount;
    }
    deposit (amount : number):void {
        if (amount <= 0) {
            console.log(`Please amount greater thAN 100..`);
        }
        this._amount += amount;
    }
    get amount():number{
        return this._amount
    }
    get phone():number{
        return this._phone;
    }
    set phone(value:number){
        if (value < 0) {
            console.log('Invalid number..');
            return;
        }
        this._phone = value;
    }
}

let account = new Account(1,'Abhi', 700 , 9934783);
account.deposit(16800);
// console.log(account.amount); throw error
console.log(account.amount);
console.log(account.phone);
account.phone = 676381783;




