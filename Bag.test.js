// const Bag = require('./Bag')

// describe('Bag class', () => {
//     //bag has weight
//     test('bag has weight', () => {
//         const bag = new Bag(25)
//         expect(bag.weight).toBe(25)
//     })
//     //if bag has no weight, return error
//     test('bag has no weight to return an error', () => {
//         expect(() => new Bag()).toThrowError('bag needs weight')
//     })
// })

const Bag = require('./Bag')

describe('Bag class', () => {
//bag has weight
test('bag has weight', () => {
const bag = new Bag(25)
expect(bag.weight).toBe(25)
})
//if bag has no weight, return error
test('bag has no weight to return an error', () => {
expect(() => new Bag()).toThrowError('bag needs weight')
})
//check if bag weight is less than the maximum weight
test('bag weight is less than the maximum weight', () => {
const bag = new Bag(22)
expect(bag.weight).toBeLessThan(Bag.maxWeight)
})
//check if bag weight is greater than the maximum weight
test('bag weight is greater than the maximum weight', () => {
expect(() => new Bag(25)).toThrowError(`bag weight cannot be more than ${Bag.maxWeight}kg`)
})

})