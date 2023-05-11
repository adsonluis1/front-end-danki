function soma(...valores){
    function somar(val){
    var rest = 0

    for(a of val){
        rest+= a
    }
        return rest
    }
       return somar(valores)
    
}

console.log(soma(10 , 15 , 20))
        
