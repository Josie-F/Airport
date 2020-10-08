// const fs = require('fs')
const { readFile } = require('fs/promises')

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
    // getInfo(callback) {
    //     fs.readFile('./airports.json', (err, data) => {
       
    //    const airportsdata = JSON.parse(String(data))
    //    const otherstuff = airportsdata.filter(c => c.iata === this.name)
    //         callback(err, otherstuff)
    //     })
    // }

        // getInfo() {
        //     return new Promise((resolve, reject) => {
        //         fs.readFile('./airports.json', (err, data) => {
        //             if (err) return reject(err)

        //             const airportsdata = JSON.parse(String(data))
        //             const otherstuff = airportsdata.filter(c => c.iata === this.name)
                
        //             resolve(otherstuff)
        //         })
        //     })
        // }
 
    async getInfo() {
        const airportsdata = await readFile('./airports.json')
        const newairportsdata = JSON.parse(String(airportsdata))
        const filtereddata = newairportsdata.filter(c => c.iata === this.name)
        console.log(filtereddata)
        return filtereddata
    }
}

module.exports = Airport