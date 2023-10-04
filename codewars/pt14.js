function find_mult_3(num){
    // your code here
    // vou ter que pegar o numero e ver quantas possibilidades é possivel de se fzaer com ele 
    // ver  quantas possibilidades é multiplo de 3
    // vai retornar quantos são multiplos de 3 e qual o maior

    const newNum =num.toString().match(/[0-9]/g)
    const tam = newNum.length
    let arr = []
    let divisiveis_3= []
    
    function addPrincipais(){
        newNum.forEach((evt)=>{
            arr.push(evt)
        })
    }

    function desmembrar(num){
        
        if(num.length == 2){ 
            arr.push(num[0].toString() + num[1].toString())
            arr.push(num[1].toString() + num[0].toString())
        }
        if(num.length == 3){
            desmembrar(newNum[0].toString() + newNum[1].toString())
            desmembrar(newNum[0].toString() + newNum[2].toString())
            desmembrar(newNum[2].toString() + newNum[1].toString())
            if(num.length == 4){
            desmembrar(newNum[3].toString() + newNum[1].toString())
            }
            arr.push(num[0].toString() + num[1].toString() + num[2].toString())
            arr.push(num[0].toString() + num[2].toString() + num[1].toString())
            arr.push(num[1].toString() + num[0].toString() + num[2].toString())
            arr.push(num[1].toString() + num[2].toString() + num[0].toString())
            arr.push(num[2].toString() + num[1].toString() + num[0].toString())
            arr.push(num[2].toString() + num[0].toString() + num[1].toString())
        }
        if(num.length == 4){
            desmembrar(newNum[0].toString() + newNum[1].toString() + newNum[2].toString())
            desmembrar(newNum[1].toString() + newNum[2].toString() + newNum[3].toString())
            arr.push(newNum[0].toString() + newNum[1].toString() + newNum[2].toString() + newNum[3].toString())
            arr.push(newNum[0].toString() + newNum[1].toString() + newNum[3].toString() + newNum[2].toString())
            arr.push(newNum[0].toString() + newNum[2].toString() + newNum[1].toString() + newNum[3].toString())
            arr.push(newNum[0].toString() + newNum[2].toString() + newNum[3].toString() + newNum[1].toString())
            arr.push(newNum[0].toString() + newNum[3].toString() + newNum[2].toString() + newNum[1].toString())
            arr.push(newNum[0].toString() + newNum[3].toString() + newNum[1].toString() + newNum[2].toString())
            arr.push(newNum[1].toString() + newNum[0].toString() + newNum[2].toString() + newNum[3].toString())
            arr.push(newNum[1].toString() + newNum[0].toString() + newNum[3].toString() + newNum[2].toString())
            arr.push(newNum[1].toString() + newNum[2].toString() + newNum[0].toString() + newNum[3].toString())
            arr.push(newNum[1].toString() + newNum[2].toString() + newNum[3].toString() + newNum[0].toString())
            arr.push(newNum[1].toString() + newNum[3].toString() + newNum[0].toString() + newNum[2].toString())
            arr.push(newNum[1].toString() + newNum[3].toString() + newNum[2].toString() + newNum[0].toString())
            arr.push(newNum[2].toString() + newNum[0].toString() + newNum[1].toString() + newNum[3].toString())
            arr.push(newNum[2].toString() + newNum[0].toString() + newNum[3].toString() + newNum[1].toString())
            arr.push(newNum[2].toString() + newNum[1].toString() + newNum[0].toString() + newNum[3].toString())
            arr.push(newNum[2].toString() + newNum[1].toString() + newNum[3].toString() + newNum[0].toString())
            arr.push(newNum[2].toString() + newNum[3].toString() + newNum[0].toString() + newNum[1].toString())
            arr.push(newNum[2].toString() + newNum[3].toString() + newNum[1].toString() + newNum[0].toString())
            arr.push(newNum[3].toString() + newNum[0].toString() + newNum[1].toString() + newNum[2].toString())
            arr.push(newNum[3].toString() + newNum[0].toString() + newNum[2].toString() + newNum[1].toString())
            arr.push(newNum[3].toString() + newNum[1].toString() + newNum[2].toString() + newNum[0].toString())
            arr.push(newNum[3].toString() + newNum[1].toString() + newNum[0].toString() + newNum[2].toString())
            arr.push(newNum[3].toString() + newNum[2].toString() + newNum[1].toString() + newNum[0].toString())
            arr.push(newNum[3].toString() + newNum[2].toString() + newNum[0].toString() + newNum[1].toString())

        }
    }
    

    if(tam == 2){
        addPrincipais()
        desmembrar(num.toString())
    }
    if(tam == 3){
        addPrincipais()
        desmembrar(newNum[0].toString() + newNum[1].toString() + newNum[2].toString())
    }
    if(tam == 4){
        addPrincipais()
        desmembrar(newNum[0].toString() + newNum[1].toString() + newNum[2].toString() + newNum[3].toString())
    }

    arr.map((evt)=>{
        if(Number(evt) % 3 == 0 && divisiveis_3.includes(Number(evt)) === false && Number(evt) != 0){
            divisiveis_3.push(Number(evt))
        }
    })
    
   
    return [divisiveis_3.length, Math.max(...divisiveis_3)];
}

console.log(find_mult_3(362))
