function stray(numbers) {
    let num
    numbers.map((e)=>{
        if((e*-1)%2===0 || (e*-1)%2===-0){
            num = e
        }
    })
    return num
}    

console.log(stray([7, 3, -2342]))