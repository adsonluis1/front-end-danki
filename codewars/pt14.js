function find_mult_3(num){
    // your code here
    // vou ter que pegar o numero e ver quantas possibilidades é possivel de se fzaer com ele 
    // ver  quantas possibilidades é multiplo de 3
    // vai retornar quantos são multiplos de 3 e qual o maior

    const newNum =num.toString().match(/[0-9]/g)
    const tam = newNum.length
    let arr = []
    let divisiveis_3= []
    if(tam == 2){
        arr.push(newNum[0])
        arr.push(newNum[1])
        arr.push(newNum[0].toString() + newNum[1].toString())
        arr.push(newNum[1].toString() + newNum[0].toString())
    }

    if(tam == 3){
        arr.push(newNum[0])
        arr.push(newNum[0].toString() + newNum[1].toString())
        arr.push(newNum[0].toString() + newNum[2].toString())
        arr.push(newNum[0].toString() + newNum[1].toString() +newNum[2].toString())
        arr.push(newNum[0].toString() + newNum[2].toString() +newNum[1].toString())

        arr.push(newNum[1])
        arr.push(newNum[1].toString() + newNum[0].toString())
        arr.push(newNum[1].toString() + newNum[2].toString())
        arr.push(newNum[1].toString() + newNum[0].toString() +newNum[2].toString())
        arr.push(newNum[1].toString() + newNum[2].toString() +newNum[0].toString())

        arr.push(newNum[2])
        arr.push(newNum[2].toString() + newNum[1].toString())
        arr.push(newNum[2].toString() + newNum[0].toString())
        arr.push(newNum[2].toString() + newNum[1].toString() +newNum[0].toString())
        arr.push(newNum[2].toString() + newNum[0].toString() +newNum[1].toString())
    }

    if(tam == 4){
        
    }

    arr.forEach((evt)=>{
        if(evt % 3 === 0){
            divisiveis_3.push(evt)
        }
    })

    console.log(divisiveis_3.length)
    // return [];
}

find_mult_3(362)