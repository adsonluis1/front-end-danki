const btn_direita= document.getElementById('btn_direita')
const btn_esquerda = document.getElementById('btn_esquerda')
const carro = document.getElementById('carro')
let x = 0 

let width = window.innerWidth

 

btn_direita.addEventListener('click' , ()=>{
    console.log(x)
    console.log(width)
    const temp =setInterval(()=>{
    if(width > x ){
     x= x+10
     carro.setAttribute('style' , `left:${x}px;`)
    }
 },100)
 

 
    clearInterval(temp2)
})

btn_esquerda.addEventListener('click' , ()=>{
   
    console.log(x)
    const temp2 = setInterval(()=>{
        x= x-10
        if(x > 0){
    carro.setAttribute('style' , `left:${x}px;`)
    }
    })
    
   
})

