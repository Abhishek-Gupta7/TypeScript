declare class Ride {
    private static _activeRide;
    startRide(): void;
    stopRide(): void;
    get activeRide(): number;
}
declare let R1: Ride;
declare let R2: Ride;
