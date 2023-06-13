declare class Account {
    readonly id: number;
    owner: string;
    private _amount;
    private _phone;
    nickName?: string;
    constructor(id: number, owner: string, _amount: number, _phone: number);
    deposit(amount: number): void;
    get amount(): number;
    get phone(): number;
    set phone(value: number);
}
declare let account: Account;
