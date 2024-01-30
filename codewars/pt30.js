const reverseSeq = n => {
    let arr = []
    for(let a=1;a <= n;a++){
        arr.push(a)
    }
    return arr.sort((a,b)=>b-a)
};

reverseSeq(5)