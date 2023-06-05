const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')
const b7 = document.getElementById('b7')
const b8 = document.getElementById('b8')
const b9= document.getElementById('b9')
const tela = document.getElementById('tela')
const bmais= document.getElementById('bmais')
const bigual = document.getElementById('bigual')

b1.addEventListener('click' , ()=>{
    tela.innerHTML+= 1
})

b2.addEventListener('click' , ()=>{
    tela.innerHTML+= 2
})

b3.addEventListener('click' , ()=>{
    tela.innerHTML+= 3
})

b4.addEventListener('click' , ()=>{
    tela.innerHTML+= 4
})

b5.addEventListener('click' , ()=>{
    tela.innerHTML+= 5
})

b6.addEventListener('click' , ()=>{
    tela.innerHTML+= 6
})

b7.addEventListener('click' , ()=>{
    tela.innerHTML+= 7
})

b8.addEventListener('click' , ()=>{
    tela.innerHTML+= 8
})

b9.addEventListener('click' , ()=>{
    tela.innerHTML+= 9
})

let num = []

bmais.addEventListener('click' , ()=>{

    num.push(Number(tela.textContent))
    tela.innerText= '' 
    tela.value = 0  
})


bigual.addEventListener('click' , ()=>{
    num.push(Number(tela.textContent))
    let num2 = 0
       num.map((e)=>{
        console.log(e)
        num2+= e
    })
    tela.innerHTML= '' 
    console.log(num)
    console.log(num2)
})