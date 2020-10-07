const Person = require('./Person')
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
        expect(person.bag[0]instanceof(Bag)).toBeTruthy()
        expect(person.bag[0].weight).toBe(20)

    })
})
