
const Airport = require('./Airport')
const Bag = require('./Bag')
const Person = require('./Person')
const Plane = require('./Plane')


describe('Airports', () => {
    test('an airport has a name', () => {
    const airport = new Airport('Billund airport')
    expect(airport.name).toBe('Billund airport')
    })
    test('an aiport must have a name', () => {
        // const airport = new Airport('Copenhagen airport')
        expect(() => new Airport).toThrowError('Airport must have a name')
    })
    test('An Airport can land a plane', () => {
        const airport = new Airport('Aarhus airport')
        const plane = new Plane(airport.name)
        expect(airport.landed.length).toBe(0)
        airport.landPlane(plane)
        expect(airport.landed.length).toBe(1)
    })
    test('there is an instance of plane when landing in an Airport', () => {
        const airport= new Airport('Hawaii')
        const plane = new Plane(airport.name)
        airport.landPlane(plane)
        expect(airport.landed[0]instanceof(Plane)).toBeTruthy()
    })
    test('7. One test should assert you have an airport, with a plane, on the plane are passengers & you can read the weight of one of the bags of a passenger', () => {
        const bag = new Bag(25)
        const bag2 = new Bag(22)
        const person = new Person('Cecilia')
        const person2 = new Person('Bob')

        person.addBag(bag)
        person2.addBag(bag2)

        const airport = new Airport('Valencia airport')
        const plane = new Plane(airport.name)

        plane.boardPlane(person)
        plane.boardPlane(person2)
        airport.landPlane(plane)
        
        expect(airport.name).toBe('Valencia airport')
        expect(airport.landed[0]).toBeTruthy()
        expect(airport.landed[0].board[0].name).toBe('Cecilia')
        expect(airport.landed[0].board[0].bag[0].weight).toBe(25)
        


    })
})