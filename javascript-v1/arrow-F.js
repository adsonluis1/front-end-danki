
const somar=(...valores)=>{

    var rest = 0
    

    for(var a in valores){
        rest+= valores[a]
       
    if(valores[a]%2 == 0){
        console.log(`${valores[a]} é par`)
    }else{
        console.log(`${valores[a]} é impar`)
    }

    }

    

    
    

    return `o valor da soma é ${rest}`



}


console.log(somar(10 , 15 , 5 , 50))




