
const validation = (a,b) => {
    const areNumbers = typeof a == 'number' && typeof b == 'number';
    const areNotNegative =  a >= 0 && b >= 0

    if(areNumbers && areNotNegative) {
        return true;
    }else {
        return false
    }

}

module.exports = validation;