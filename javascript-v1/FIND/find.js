var caixa_arrey =   document.getElementById('caixa_arrey')
var tela_arrey = document.getElementById('tela_arrey')
var caixa_pesquisar = document.getElementById('caixa_pesquisar')
var inome = document.getElementById('inome')
var caixa_resultado = document.getElementById('caixa_resultado')
var te_resultado = document.getElementById('te_resultado')
var pesquisar = document.getElementById('pesquisar')
var array = ['adson' , 'anne']

tela_arrey.innerHTML= array

pesquisar.addEventListener('click' , (e)=>{
    te_resultado.innerHTML= 'valor nn encontrado'
    var ver = array.find((e , i)=>{
        if(e == inome.value){
            te_resultado.innerHTML= `encontramos o ${e} na posição ${i+1}`
            console.log(e)
            return true
            
        }
         
         console.log(inome.value)
        
    })
   
})

   