function openOrSenior(data){
    // abrir o data
    // pegar as informações do array 
    // fzr o sistema de if e else
    let result = []
    let tam = data.length
    
    for(let a = 0;a < tam;a++){
        if(data[a][0]>=55){
            if(data[a][1]>7){
                result.push('Senior')
            }else{
                result.push('Open')
            }
        }else{
            result.push('Open')
        }
    }
    
    return result
}

let data = [[3, 12],[55,1],[91, -2],[53, 23]]

openOrSenior(data)