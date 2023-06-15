"use strict";
class Logger {
    constructor(_fileName) {
        this._fileName = _fileName;
    }
    writeMessage(msg) {
        this._fileName = msg;
    }
}
class People {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends People {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
class Emp {
    constructor(name, salary, address, street, city, zipcode) {
        this.name = name;
        this.salary = salary;
        this.address = address;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXJjaXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2V4Y2VyY2lzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsTUFBTSxNQUFNO0lBQ1IsWUFBb0IsU0FBZ0I7UUFBaEIsY0FBUyxHQUFULFNBQVMsQ0FBTztJQUNwQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEdBQVk7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBTUQsTUFBTSxNQUFNO0lBQ1IsWUFBbUIsU0FBZ0IsRUFDeEIsUUFBZTtRQURQLGNBQVMsR0FBVCxTQUFTLENBQU87UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBTztJQUFHLENBQUM7SUFDMUIsSUFBSSxRQUFRO1FBQ0osT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25ELENBQUM7Q0FDUjtBQUtELE1BQU0sUUFBUyxTQUFRLE1BQU07SUFDekIsWUFBbUIsTUFBYSxFQUN4QixTQUFnQixFQUNoQixRQUFpQjtRQUVyQixLQUFLLENBQUMsU0FBUyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBSlgsV0FBTSxHQUFOLE1BQU0sQ0FBTztJQUtoQyxDQUFDO0NBQ0o7QUFzQkQsTUFBTSxHQUFHO0lBT0wsWUFBbUIsSUFBVyxFQUNuQixNQUFhLEVBQ2IsT0FJTixFQUNNLE1BQWUsRUFDZixJQUFhLEVBQ2IsT0FBZ0I7UUFUUixTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQU87UUFDYixZQUFPLEdBQVAsT0FBTyxDQUliO1FBQ00sV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRzNCLENBQUM7Q0FDSiJ9