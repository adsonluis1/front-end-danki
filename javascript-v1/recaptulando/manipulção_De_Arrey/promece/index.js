const tela = document.getElementById('tela')
const hehe = document.querySelector('#hehe')
const promeca = new Promise((certo,error) => {
    let valor = true
    
        setInterval(() => {
            if(hehe.value === 'adson'){
                certo('tudo ok')
            }
            else{
                error('erro')
            }
        }, 6000);
        

    
    
})

promeca.catch((retorno) => {
    tela.innerHTML= retorno
})

promeca.then((retorno) => {
    tela.innerHTML = retorno
})
console.log(tela)