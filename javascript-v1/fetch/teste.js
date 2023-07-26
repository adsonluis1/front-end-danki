// deu errado
const htpps= 'http://127.0.0.1:5501/javascript-v1/fetch/testeapi.html'

fetch(htpps)
.then(res=>res.json())
.then(res=>console.log(res))