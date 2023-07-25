const http = 'https://teste.sradson.repl.co'
const temperatura = document.querySelector('#temperatura')
const pressao = document.querySelector('#pressao')
const forca = document.querySelector('#nivel')
const btn = document.querySelectorAll('.btn')[0]

const funk = {
   tudo:()=>{
    fetch(http)
    .then(res=>res.json())
    .then(dados=>{
    temperatura.innerHTML= `temperatura= ${dados.temperatura} °C`
    pressao.innerHTML= `pressão= ${dados.pressao}`
    nivel.innerHTML= `nivel= ${dados.nivel}`
    })
   }
}

btn.addEventListener('click' , ()=>{
   funk.tudo()
})
