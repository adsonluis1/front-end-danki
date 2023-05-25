var btn_mais = document.getElementById('mais')
var btn_menos = document.getElementById('menos')
var btn_vezes = document.getElementById('vezes')
var btn_dividir = document.getElementById('dividir')
var tela = document.getElementById('tela')
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')

var op = [
()=>{
    return Number(num1.value) + Number(num2.value)
},
()=>{
    return Number(num1.value) - Number(num2.value)
},
()=>{
    return Number(num1.value) * Number(num2.value)
},
()=>{
    return Number(num1.value) / Number(num2.value)
}
] 

btn_mais.addEventListener('click' ,()=>{tela.innerHTML=(op[0]())} )
btn_menos.addEventListener('click' ,()=>{ tela.innerHTML=(op[1]())} ) 
btn_vezes.addEventListener('click' ,()=>{ tela.innerHTML=(op[2]())} )   
btn_dividir.addEventListener('click' ,()=>{ tela.innerHTML=(op[3]())} )
   

