function persistence(num) {
    let key = true
    let x = 0
    if(num<10)
        return 0

    while(key && num >= 10){
        if(num.toString().split('').reduce((a,b)=> a*b) < 10){
            key = false
        }
        x++
        num = num.toString().split('').reduce((a,b)=> a*b)
    }   
    return x
}

 console.log(persistence(3))