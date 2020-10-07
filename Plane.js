class Plane {
    constructor(inbound, outbound){
        if(!inbound || !outbound) throw new Error('Plane must have a destination')
        this.board = []
        this.outbound = outbound
        this.inbound = inbound
    }
    boardPlane(person) {
    this.board.push(person)
    }

}
module.exports=Plane