//https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/

function minimumSum(num) {
    let arr = [];

    while(num > 0){
        let temp = num%10;
        arr.push(temp);
        num = Math.floor(num/10);

    }
    arr.sort((a,b)=>a-b);

    return arr[0]*10+arr[2]+arr[1]*10+arr[3];
}

console.log(minimumSum(1000));