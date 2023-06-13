"use strict";
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('Walking..');
    }
}
class Teacher extends Person1 {
    getFullName() {
        return `Professor ${super.getFullName()}`;
    }
}
let T1 = new Teacher('John', 'Smith');
console.log(T1.getFullName());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kT3ZlcnJpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWV0aG9kT3ZlcnJpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sT0FBTztJQUNULFlBQW1CLFNBQWdCLEVBQ3hCLFFBQWU7UUFEUCxjQUFTLEdBQVQsU0FBUyxDQUFPO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQU87SUFFMUIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDL0MsQ0FBQztJQUNELElBQUk7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBUSxTQUFRLE9BQU87SUFDaEIsV0FBVztRQUNoQixPQUFPLGFBQWEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBQ0QsSUFBSSxFQUFFLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMifQ==