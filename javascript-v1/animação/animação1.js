const btn_direita= document.getElementById('btn_direita')
const btn_esquerda = document.getElementById('btn_esquerda')
const carro = document.getElementById('carro')
const btn_parar = document.getElementById('btn_parar')

let x = 0 

let width = window.innerWidth - 40
let pode = true

const movi= ()=>{ 
    
    if(x < width){
        x = x+10
    carro.setAttribute('style' , `left:${x}px;`)
    console.log(x)
    }
}

const movi2= ()=>{ 
   
    if(x > 0){
    x = x-10
    carro.setAttribute('style' , `left:${x}px;`)
    console.log(x)
    }
}

window.addEventListener('resize' , ()=>{
    width= window.innerWidth - 40
})

btn_direita.addEventListener('click' , ()=>{
    clearInterval(pode)
    pode= setInterval(movi,10,1)
})

btn_esquerda.addEventListener('click' , ()=>{
    clearInterval(pode)
    pode= setInterval(movi2,10)
    
})

btn_parar.addEventListener('click', ()=>{
    clearInterval(pode)
})



