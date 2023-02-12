// class Bag {
//     constructor(weight) {
//         if(!weight){
//             throw new Error('bag needs weight')
//         } 
//         this.weight = weight
//     }
// }

class Bag {
    static MAX_WEIGHT = 23;

    constructor(weight) {
        if(weight > Bag.MAX_WEIGHT) {
            throw new Error(`Bag weight can not be greater than ${Bag.MAX_WEIGHT} kg`)
        } 
        this.weight = weight
    }
}

module.exports = Bag