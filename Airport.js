class Airport {
    static airports = []

    constructor(name) {
        if (!name) throw new Error('Airport must have a name')
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }
    register(plane) {
        this.planes.push(plane)
    }

    takeOff(plane) {
        const takeoff = this.planes.indexOf(plane)
        this.planes.splice(takeoff, 1)

    }
    landPlane(plane) {
        this.planes.push(plane)

    }

}

module.exports = Airport