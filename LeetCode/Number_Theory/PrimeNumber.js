

const isPrime1 = (n) => {
    if (n == 0 || n == 1) {
      return false
    }
    for (let i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        return false
      }
    }
    return true;
  }
  
  const isPrime = (n) => {
    if (n == 2 || n == 3) {
      return true
    }
    if (n % 2 == 0 || n % 3 == 0) {
      return false
    }
    let i = 5
    while (i * i <= n) {
      if (n % i == 0 || n % (i + 1) == 0) {
        return false
      }
      i += 6
    }
    return true
  }
  
  console.log(isPrime1(5))
  