const { Person, Passenger, Crew } = require('./Person')
const Bag = require('./Bag')

describe('People', () => {
    test('A person has a name', () => {
        const person = new Person('Sophia')
        expect(person.name).toBe('Sophia')
    })
    test('person can have a bag', () => {
        const bag = new Bag(20)
        const person = new Person('Ariel')
        expect(person.bag.length).toBe(0)
        person.addBag(bag)
        expect(person.bag.length).toBe(1)
        expect(person.bag[0] instanceof (Bag)).toBeTruthy()
        expect(person.bag[0].weight).toBe(20)

    })
    test('in the Airport there are instances of passengers', () => {
        const passenger = new Passenger('Gina')
        expect(passenger instanceof Passenger).toBeTruthy()
        expect(passenger.callAttendantant()).toBe('Hi, sorry, can you help me?')
    })
    test('A crew member can crossCheck another crewmember', () => {
        const crew1 = new Crew('Abigail')
        const crew2 = new Crew('Arnold')

        expect(crew2.crossCheck([crew1])).toBeTruthy()
    })
    test('crew members can only crossCheck other crew members', () => {
        const crew1 = new Crew('Peter')
        const passenger1 = new Passenger('Ingrid')

        expect(crew1.crossCheck([passenger1])).toBeFalsy()
    })
    test('All crew are Crew members', () => {
        const crew1 = new Crew('Jane')
        const crew2 = new Crew('Erika')
        const crew3 = new Crew('Bob')

        expect(crew3.crossCheck([crew1, crew2, crew3])).toBeTruthy()
    })
})
