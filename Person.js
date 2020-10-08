class Person {
    constructor(name) {
        this.name = name
        this.bag = []

    }
    addBag(bag) {
        this.bag.push(bag)
    }
}

class Passenger extends Person {
    callAttendantant() {
        return 'Hi, sorry, can you help me?'
    }
}

class Crew extends Person {
    crossCheck(crewarray) {
        return crewarray.every(crewmember => {
            if (crewmember instanceof Crew) {
                return true
            } else {
                return false

            }
        })
    }
}
module.exports = { Person, Passenger, Crew }