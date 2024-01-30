function gimme (triplet) {
    let a
    for(let n = parseInt(Math.min(...triplet));n<parseInt(Math.max(...triplet));n++){
        triplet.indexOf(n) != -1?a = triplet.indexOf(n):a=null
    }
    return a
}

console.log(gimme([-5.2,-10.6,14]))
// ainda nn acabei