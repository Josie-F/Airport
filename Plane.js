class Plane {
    constructor(destination){
        if(!destination) throw new Error('Plane must have a destination')
        this.board = []
        this.destination = destination
    }
    boardPlane(person) {
    this.board.push(person)
    }

}
module.exports=Plane