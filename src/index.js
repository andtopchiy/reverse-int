module.exports = function reverse (n) {
    let notStr = String(Math.abs(n));
    let result = '';

    for (let i=notStr.length-1; i>=0; i--) {
        result+=notStr[i];
    }

    return parseInt(result);
}
