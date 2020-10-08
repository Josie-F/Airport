const Plane = require('./Plane')
const { Person, Passenger, Crew } = require('./Person')
const Airport = require('./Airport')

describe('there are planes', () => {
    test('people can board planes', () => {
        const plane = new Plane('Aarhus', 'Heathrow')
        const person = new Passenger('Gemma')
        expect(plane.passboard.length).toBe(0)
        plane.boardPlane([person])
        expect(plane.passboard.length).toBe(1)
    })
    test('there is an instance of a person when boarding the plane', () => {
        const plane = new Plane('Hawaii', 'Heathrow')
        const person = new Passenger('Bob')
        plane.boardPlane([person])
        expect(plane.passboard[0] instanceof (Person)).toBeTruthy()
    })
    test('planes should have a destination', () => {
        const plane = new Plane('Santorini', 'Heathrow')
        expect(plane.inbound).toBe('Santorini')
    })
    test('planes should have an Airport destination with an airport name', () => {
        const inb = new Airport('Santorini')
        const out = new Airport('Heathrow')
        const plane = new Plane(inb, out)
        expect(plane.inbound.name).toBe('Santorini')
    })
    test('a plane needs a destination', () => {
        expect(() => new Plane).toThrowError('Plane must have a destination')
    })
    test('Crew and passengers board the plane seperately', () => {
        const passenger = new Passenger('Anna')
        const passenger2 = new Passenger('Katy')
        const crew = new Crew('Carlos')
        const inb = new Airport('Santorini')
        const out = new Airport('Heathrow')
        const plane = new Plane(inb, out)
        plane.boardPlane([passenger, passenger2, crew])
        expect(plane.passboard[0]instanceof (Passenger)).toBeTruthy()
        expect(plane.crew[0]instanceof (Crew)).toBeTruthy()

    })
    
})