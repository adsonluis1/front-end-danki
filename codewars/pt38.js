function tribonacci(signature,n){
    for(let b = 0;b<=n;b++){
        let a = signature.length
        signature.push((signature[a-3] + signature[a-2] + signature[a-1]))
    }
    console.log(signature.splice(0,n))
}

tribonacci([1,1,1],10)