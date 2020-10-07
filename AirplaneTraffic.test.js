const Airport = require('./Airport')
const Plane = require('./Plane')

test('planes can fly between Airports', () => {
    const Chicago = new Airport ('Chicago')
    const Hollywood = new Airport('Hollywood')
    const plane = new Plane(Chicago, Hollywood)
    plane.inbound.register(plane)
    plane.inbound.takeOff(plane)
    plane.outbound.landPlane(plane)
    expect(Chicago.planes.length).toBe(0)
    expect (Hollywood.planes.length).toBe(1)
    // this makes a circular dependency :(
})