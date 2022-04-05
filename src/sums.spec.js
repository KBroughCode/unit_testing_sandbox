const {add, subtract, multiply, divide} = require('./sums');


describe('sum.js', () => {

    describe('add function', () => {

        it('should add two numbers together', () => {
            expect(add(2,4)).toBe(6)
        })

        it('should return "invalid input" if non numeric value passed', () => {
            expect(add('d', '!')).toBe("invalid input");
        })
        
        it('should return "invalid input" if number is negative', () => {
            expect(add(0, -5)).toBe("invalid input");
        })

    })

    describe('subtract function', () => {
        
    })

    describe('multiply function', () => {

        //should only accept even numbers
        
    })

    describe('divide function', () => {

        //should be passed the value 4 for one of the inputs
        
    })

})