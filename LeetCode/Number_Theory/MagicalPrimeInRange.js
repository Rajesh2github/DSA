function getAllMPNumbers(first, last){
    let  ans = 0
    for(let i = first; i <= last; i++){
        if(isPrime(i)){
            if(/[0,1,4,6,8,9]/.test(i)){

            }else{
            ans++;
            }
        }
    }
    return ans;
}

const isPrime = (n) => {
    if(n < 2){
        return false;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(getAllMPNumbers(1,100));