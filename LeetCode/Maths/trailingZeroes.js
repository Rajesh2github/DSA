https://getsdeready.com/courses/design-dsa-combined/lesson/factorial-trailing-zeroes-2/

function trailingZeroes(n){
    let ans = 0;
    let d = 5;
    while (d <= n) {
        ans += parseInt(n/d);
        d *=5;
    }
    return ans;
}

console.log(trailingZeroes(25));