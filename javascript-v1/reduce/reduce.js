var caixa_arrey =   document.getElementById('caixa_arrey')
var tela_arrey = document.getElementById('tela_arrey')
var caixa_pesquisar = document.getElementById('caixa_pesquisar')
var inome = document.getElementById('inome')
var caixa_resultado = document.getElementById('caixa_resultado')
var te_resultado = document.getElementById('te_resultado')
var pesquisar = document.getElementById('pesquisar')

var array = [1,2,3,5,7,8]
tela_arrey.innerHTML= array
var ant = []
var atu = []
pesquisar.addEventListener('click' , (evt)=>{

    const ver= array.reduce((antes , atual , depois)=>{
        ant.push(antes)
        atu.push(atual)
        return atual + antes
    })
    te_resultado.innerHTML+= ver
    te_resultado.innerHTML+= `<br> atual: ${atu}`
    te_resultado.innerHTML+= `<br> antes: ${ant}`
    
})