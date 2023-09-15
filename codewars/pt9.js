function countBy(x, n) {
    let z = []
    while(x <= n){
        z.push(x)
        x++
    }
    return z;
  }

console.log(countBy(-2,2))