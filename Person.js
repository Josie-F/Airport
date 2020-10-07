class Person {
    constructor(name) {
    this.name = name
    this.bag = []
    
    }
    addBag(bag) {
        this.bag.push(bag)
    }
}
module.exports = Person