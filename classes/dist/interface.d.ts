interface Calendar {
    name: string;
    addEvent(): void;
    removEvent(): void;
}
declare class GoogleCalendar implements Calendar {
    name: string;
    constructor(name: string);
    addEvent(): void;
    removEvent(): void;
}
