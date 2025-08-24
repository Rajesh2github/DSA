https://leetcode.com/problems/power-of-four/
const isPowerOfFour = function(n) {
    if(n == 1){
        return true;
    }
    let d = 4;
    while(d<=n){
        if(n%d ==0){
            return true;
        }
        d = d*4;
    }
    return false;
}