const totoalFact = (n) => {
    let i = 1
    let total = 0
    while (i * i <= n) {
      if (n % i == 0) {
        if (n / i == i) {
          total = total + 1;
        } else {
          total = total + 2;
        }
      }
      i++;
    }
    
    return total;
  }
  
  console.log(totoalFact(36));