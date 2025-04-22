//https://leetcode.com/problems/the-kth-factor-of-n/description/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    let count = 0;
    let i = 1;
    while (k != count && i <= n) {
        if (n % i == 0) {
            count++;
        }
        i++;
    }
    return k == count ? --i : -1;
};