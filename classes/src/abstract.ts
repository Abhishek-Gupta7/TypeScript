abstract class Shape{
    constructor(public color : string) {
        
    }
    // render(){

    // }
    abstract render():void;
}

class Circle extends Shape{
    constructor(public radius:number,
        color : string
        ) {
        super(color);
    }

    override render():void{

    };
}

let c1 = new Circle(1,'red');