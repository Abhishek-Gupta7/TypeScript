interface Calendar{
    name:string,
    addEvent() : void,
    removEvent():void,
}

class GoogleCalendar implements Calendar{
    constructor(public name: string) {
    }
    addEvent(): void {
        console.log("Method not implemented.");
    }
    removEvent(): void {
        console.log("Method not implemented.");
    }
}