"use strict";
class Person {
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
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    test() {
        console.log('Giving test..');
    }
}
let s1 = new Student(1, 'John', 'Johnny');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5oZXJpdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sTUFBTTtJQUNSLFlBQW1CLFNBQWdCLEVBQ3hCLFFBQWU7UUFEUCxjQUFTLEdBQVQsU0FBUyxDQUFPO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQU87SUFFMUIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDL0MsQ0FBQztJQUNELElBQUk7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBUSxTQUFRLE1BQU07SUFDeEIsWUFBNEIsRUFBVyxFQUNuQyxTQUFnQixFQUNoQixRQUFpQjtRQUViLEtBQUssQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFKTixPQUFFLEdBQUYsRUFBRSxDQUFTO0lBS3ZDLENBQUM7SUFFRCxJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVqQyxDQUFDO0NBQ0o7QUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsQ0FBQyxDQUFDIn0=