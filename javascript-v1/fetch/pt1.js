const http = 'https://teste--sradson.repl.co'

fetch(http)

.then(res=>res.json())
.then(dados=>{
    console.log(dados.pressao)
})



