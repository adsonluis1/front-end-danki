function maps(x){
    //   Dado um array de inteiros, retorne um novo array com cada valor duplicado.
        let result = []
        x.map((evt)=>{
            result.push(evt * 2)
        })
        return result
    }   

console.log(maps([5,20,5]))


