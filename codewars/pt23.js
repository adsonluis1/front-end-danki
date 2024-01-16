function squareDigits(num){
    let f = ''
    num.toString().split('').map((evt)=>{
        f+=evt * evt
    })
    return f
  }

console.log(squareDigits(9119))