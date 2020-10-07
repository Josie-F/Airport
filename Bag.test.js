const Bag = require('./Bag')

describe('Passenger Bags', () => {
    test('Bag has a weight', () => {
        const bag = new Bag(14)
        expect (bag.weight).toBe(14)
    })
    test('bag must have a weight', () => {
        //const bag = new Bag(14)
        expect(() => new Bag).toThrowError('bags must have a weight')
    })
})