
const Airport = require('./Airport')
const Bag = require('./Bag')
const Person = require('./Person')
const Plane = require('./Plane')


describe('Airports', () => {
    test('an airport has a name', () => {
        const airport = new Airport('Billund')
        expect(airport.name).toBe('Billund')
    })
    test('an aiport must have a name', () => {
        expect(() => new Airport).toThrowError('Airport must have a name')
    })
    test('An Airport can land a plane', () => {
        const inb = new Airport('Aarhus')
        const out = new Airport('LA')
        const plane = new Plane(inb, out)
        expect(inb.planes.length).toBe(0)
        inb.landPlane(plane)
        expect(inb.planes.length).toBe(1)
    })
    test('there is an instance of plane when landing in an Airport', () => {
        const inb = new Airport('Hawaii')
        const out = new Airport('LA')
        const plane = new Plane(inb, out)
        inb.landPlane(plane)
        expect(inb.planes[0] instanceof (Plane)).toBeTruthy()
    })
    test('7. One test should assert you have an airport, with a plane, on the plane are passengers & you can read the weight of one of the bags of a passenger', () => {
        const bag = new Bag(25)
        const bag2 = new Bag(22)
        const person = new Person('Cecilia')
        const person2 = new Person('Bob')

        person.addBag(bag)
        person2.addBag(bag2)

        const inb = new Airport('Luton')
        const out = new Airport('LA')
        const plane = new Plane(inb, out)

        plane.boardPlane(person)
        plane.boardPlane(person2)
        inb.landPlane(plane)

        expect(inb.name).toBe('Luton')
        expect(inb.planes[0]).toBeTruthy()
        expect(inb.planes[0].board[0].name).toBe('Cecilia')
        expect(inb.planes[0].board[0].bag[0].weight).toBe(25)
    })
    test('airports should know about each other', () => {
        expect(Airport.airports.length).toBe(7)
        new Airport('Kastrup')
        new Airport('Heathrow')
        expect(Airport.airports.length).toBe(9)

    })
})