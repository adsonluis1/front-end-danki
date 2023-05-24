var caixa_arrey =   document.getElementById('caixa_arrey')
var tela_arrey = document.getElementById('tela_arrey')
var caixa_pesquisar = document.getElementById('caixa_pesquisar')
var inome = document.getElementById('inome')
var caixa_resultado = document.getElementById('caixa_resultado')
var te_resultado = document.getElementById('te_resultado')
var pesquisar = document.getElementById('pesquisar')

var array = [18 , 16 , 20 , 34 , 64 , 89 ,43 ,31]
tela_arrey.innerHTML= array

pesquisar.addEventListener('click' , (evt)=>{
  const ver = array.some((e , i)=>{
    if(e<18){
        te_resultado.innerHTML= `no temos responsavies`
    }
    return e>=18
  })
  if(ver){
    te_resultado.innerHTML = 'tudo ok '
  }
  
})
