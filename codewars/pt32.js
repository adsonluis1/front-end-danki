function gimme (triplet) {
    let a = []
    for(let n = Math.min(...triplet);n<=Math.max(...triplet);n+= 0.1){
        triplet.indexOf(Number(n.toFixed(1))) != -1?a.push(triplet.indexOf(Number(n.toFixed(1)))):null
    }
    return a[1]
}

console.log(gimme([-2,-3.2,1,-1]))
// ainda nn acabei