//https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/


/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {

    let ans = "";
    if(num === 0){
        return "0";
    }

    if (num < 0) {
        //num = (~num + 1);
        num = num >>> 0; // get signed 2's Complement;
    }

    while (num > 0) {
        let haxChar = num % 16;
        if (haxChar > 9) {
            haxChar = String.fromCharCode(87 + haxChar);
        }
        ans = haxChar + ans;
        num = parseInt(num / 16);
    }
    return ans;
};