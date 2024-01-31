function solution(string) {
    let arr = []
    string.split('').map((ele)=>{
        if(/[a-z]/.test(ele)){
             arr.push(ele)
        }else if(/[A-Z]/.test(ele)){
            arr.push(` ${ele}`)
        }
    })
      
    return arr.join('')
}

console.log(solution('adsonLuisRodriguesDeAlmeidaMatiasSantosDaRepublica'))