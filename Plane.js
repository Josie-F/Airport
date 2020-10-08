const { Person, Crew, Passenger} = require('./Person')
class Plane {
    constructor(inbound, outbound) {
        if (!inbound || !outbound) throw new Error('Plane must have a destination')
        this.passboard = []
        this.outbound = outbound
        this.inbound = inbound
        this.crew = []
    }

    boardPlane(personarray) {
        personarray.map((individualperson) => {
         
             if (individualperson instanceof Passenger) {
                this.passboard.push(individualperson);
            } else if (individualperson instanceof Crew) {
                
                this.crew.push(individualperson);
            }
        })
    }
}
module.exports = Plane