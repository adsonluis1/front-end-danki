function somar(...valores){
   var res = 0 
   var tam = valores.length

    for(var a = 0; a < tam; a++){
    res+= valores[a] 
    
}

    return `temos ${tam} numeros que a soma da ${res}`
}

console.log(somar(10 , 12 , 13))



