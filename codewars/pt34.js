function nbDig(n, d) {
    let arr = ''
    let k = 0
    for(let a = 0;a<=n;a++){
        arr+= (a*a).toString()
    }
    arr.split('').map((ele)=> {if(ele == d){k++}})
    return k
}

console.log(nbDig(10,1))