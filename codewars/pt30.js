const reverseSeq = n => {
    let arr = []
    for(let a=1;a <= n;a++){
        arr.push(a)
    }
    console.log(arr.sort((a,b)=>b-a))
};

reverseSeq(5)