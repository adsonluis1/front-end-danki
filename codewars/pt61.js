function sumMix(x){
    return Number(x.reduce((a,b)=> Number(a)+Number(b)))
}

console.log(sumMix(['1']))