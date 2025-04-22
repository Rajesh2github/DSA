/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num <= 9) {
        return num;
    }
    num = sumOfDigit(num);
    return addDigits(num);


};

const sumOfDigit = (num) => {
    let ans = 0;
    while (num > 0) {
        let dig = num % 10;
        ans = ans + dig;
        num = parseInt(num / 10);
    }
    return ans;
}