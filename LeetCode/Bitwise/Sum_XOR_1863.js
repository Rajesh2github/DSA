//https://leetcode.com/problems/sum-of-all-subset-xor-totals/
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {

    let ans = 0;
    let tsub = 1 << nums.length;

    for (let i = 0; i < tsub; i++) {
        let subSet = 0;
        for (let j = 0; j < nums.length; j++) {
            if ((i & (1 << j)) !== 0) {
                subSet = subSet ^ nums[j];
            }
        }
        ans += subSet;
    }
    return ans;
};