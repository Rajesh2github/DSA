// Find Prime from 2 to N

//Solutuon 1

const allPrme = (n) => {
    let ans = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            ans.push(i);
        }
    }
    return ans;
}

const isPrime = (n) => {

    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


//console.log(allPrme(40));



// method 2


const AllPrime2 = (N) => {
    let arr = new Array(N).fill(true);
    arr[0]= false;
    for(let i = 2; i*i <= N; i++){
        if(isPrime(i)){
            for(let j = i*i; j <= N; j++){
                arr[i*j-1] = false;
            }
        }
    }
    for(let i = 1; i<=N; i++){
        if(arr[i]){
            console.log(i+1);
        }
    }
}

console.log( AllPrime2(50));