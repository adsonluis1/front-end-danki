function stray(numbers) {
    let num
    numbers.map((e)=>{
        if((e*-1)%2===0){
            num = e
        }
    })
    return num
}    

console.log(stray([1, 1, 2]))