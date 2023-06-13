class Ride{
    private static _activeRide = 0;

    startRide(){
        Ride._activeRide++;
    }
    stopRide(){
        Ride._activeRide--;
    }

    get activeRide(){
        return Ride._activeRide;
    }
}

let R1 = new Ride();
R1.startRide();
let R2 = new Ride();
R2.startRide();

console.log(R1.activeRide);
console.log(R2.activeRide);
