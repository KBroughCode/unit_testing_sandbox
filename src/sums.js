const validation = require('./helpers/inputValidator')

const add = (a,b) => {

    const areInputsValid = validation(a,b)

    if(areInputsValid) {
        return a + b;
    }else {
        return "invalid input"
    }
}

const subtract = () => {
    
}

const multiply = () => {
    
}

const divide = () => {

}


module.exports = { add, subtract, multiply, divide };