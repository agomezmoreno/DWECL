class Car {
    constructor (model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
    }

    drive(distance) {
        let maxDistance = this.tank * this.milesPerGallon;

        if (distance <= maxDistance) {
            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;
          } else {
            this.odometer += maxDistance;
            this.ttank = 0;
            return `En el kilomotro ${this.odometer} se agotó la gasolina!`;
          }
    }

}

const myCar = new Car('Toyota', 25);
myCar.fill(100);
myCar.drive(100);
console.log(myCar.odometer); 
console.log(myCar.tank);  