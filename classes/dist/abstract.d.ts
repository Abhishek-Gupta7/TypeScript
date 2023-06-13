declare abstract class Shape {
    color: string;
    constructor(color: string);
    abstract render(): void;
}
declare class Circle extends Shape {
    radius: number;
    constructor(radius: number, color: string);
    render(): void;
}
declare let c1: Circle;
