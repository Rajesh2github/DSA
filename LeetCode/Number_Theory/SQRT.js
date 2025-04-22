const sqrt = (n) => {
    let ans = 0;
    let start = 0;
    let end = n;
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (mid * mid == n) {
            ans = mid;
            break;
        } else if (mid * mid <= n) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    let temp = 0.1;
    while (ans * ans < n) {

        if (ans * ans == n) {
            break;
        }
    
    ans = ans + temp;
    }
    return ans;
}

console.log(sqrt(40));