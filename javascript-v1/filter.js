const idade = [10 , 30 , 17 , 20 , 46 , 36 , 9 , 6 , 16 , 18]

const maior= idade.filter((val)=>{
   if(val >= 18){
        return val
    }
})

const menor = idade.filter((val)=>{
    if(val < 18){
        return val
    }
})

console.log(...idade)
console.log(maior)
console.log(menor)