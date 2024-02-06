function digitize(n) {
    return n.toString().split('').reverse().map((e)=>Number(e))
}

console.log(digitize(10))