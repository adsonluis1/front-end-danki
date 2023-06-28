const btn_play= document.getElementById('btn_direita')
const btn_parar = document.getElementById('btn_esquerda')
const carro = document.getElementById('carro')

let x = 0
let width= window.innerWidth
let interval2= 0
let pode= (num)=>{
    if(num >= 1){
            if(x <= width-40){
            x+= 10 
            carro.style.left=x+'px'
            }
    }else if(num <=-1){
            if(x >=0){
            x+= -10 
            carro.style.left=x+'px'
            }
    }
}

window.addEventListener('resize' , ()=>{
    width= window.innerWidth
    console.log(width)
})

let check= ()=>{
    if(x >= width-40){
        clearInterval(interval)
        interval= setInterval(pode,50,-1)
    }
    if(x <= 0){
        clearInterval(interval)
        interval= setInterval(pode,50,1)
       
    }
}

let interval = null
btn_play.addEventListener('click',()=>{
    
    interval2= setInterval(check,100)
})

btn_parar.addEventListener('click',()=>{
   clearInterval(interval2)

    
})




