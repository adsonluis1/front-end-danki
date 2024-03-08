function towerBuilder(n) {
    let arr = []
    let f = ''
    let as = '*' 
    for(let a = 0;a < n;n--){
        for(let a = 1;a < n;a++){
            f+=' '
        }
        f+= as 
        as+= '**'
        for(let a = 1;a < n;a++){
            f+=' '
        }
        arr.push(f)
        f=''
    }
    return arr
}

console.log(towerBuilder(4))