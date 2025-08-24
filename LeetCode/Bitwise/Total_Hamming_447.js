/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let ans = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            ans = ans + setBits((nums[i] ^ nums[j]));
        }
    }
    return ans;
};

const setBits = (num) => {
    sb = 0;
    while (num > 0) {
        if (num & 1 == 1) {
            sb++;
        }
        num = num >> 1;
    }
    //console.log(num, sb);
    return sb;
}