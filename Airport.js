class Airport {
    constructor(name) {
        if(!name) throw new Error('Airport must have a name')
        this.name = name
        this.landed = []
    }
    landPlane(plane) {
        this.landed.push(plane)
        }
}

module.exports = Airport