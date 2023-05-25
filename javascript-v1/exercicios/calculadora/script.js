var num1 = document.getElementById('num1')

var btn_mais = document.getElementById('mais')
var btn_menos = document.getElementById('menos')
var btn_vezes = document.getElementById('vezes')
var btn_dividir = document.getElementById('dividir')
var num2 = document.getElementById('num2')
// var num22 = Number(num2.valor)
var tela = document.getElementById('tela')
var btn_igual = document.getElementById('igual')
var sinal = 0
// var rest = 0


btn_mais.addEventListener('click' , ()=>{
    sinal = '+'
    console.log(sinal)
})
btn_menos.addEventListener('click' , ()=>{
    sinal = '-'
    console.log(sinal)
})
btn_vezes.addEventListener('click' , ()=>{
    sinal = 'x'
    console.log(sinal)
})
btn_dividir.addEventListener('click' , ()=>{
    sinal = ':'
    console.log(sinal)
})


btn_igual.addEventListener('click' , ()=>{
    if(sinal == '+'){
       tela.innerHTML=(Number(num1.value) + Number(num2.value))
    }
    if(sinal == '-'){
        tela.innerHTML=(Number(num1.value) - Number(num2.value))
     }
    if(sinal == 'x'){
        tela.innerHTML=(Number(num1.value) * Number(num2.value))
     }
    if(sinal == ':'){
        tela.innerHTML=(Number(num1.value) / Number(num2.value))
     }
     
})
