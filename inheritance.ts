class Vehicle {

    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    accelerate() {
        console.log('Vehicle is speeding up')
    }

    print() {
        console.log("Name: " + this.name)
        console.log("Price: " + this.price)
    }
}

class Car extends Vehicle {

    gearType: string

    constructor(name: string, price: number, gearType: string) {
        super(name, price)
        this.gearType = gearType
    }

    accelerate() {
        console.log('Car is speeding up')
    }

    print() {
        super.print()
        console.log("Gear Type: " + this.gearType)
    }

}

let c = new Car('City',121212,'Auto')

c.print()