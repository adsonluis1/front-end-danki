const pessoal = [
    {nome:'adson', salario:5000, cnh:true},
    {nome:'anne', salario:4500, cnh:false},
    {nome:'luis', salario:6000, cnh:true},
    {nome:'rafaelle', salario:7800, cnh:true}
]

console.log(pessoal)

// 1- reverse

// const pessoal_reverso = pessoal.reverse();
// console.log(pessoal_reverso)

// 2- find

console.log(pessoal.find((users)=> users.salario ))

// 3- findIndex

const Salario = pessoal.findIndex((trabalhadores) => trabalhadores.salario > 7000)

console.log(Salario)

// 4- includes

const num = [1,2,3,4,5]

const hehe = num.includes(4)

console.log(hehe)

// 5- map

const Cmap = pessoal.map((users) =>{
    users.vivo = true 
    return users
})

console.log(Cmap)

// 6- filter 

const pilotos = pessoal.filter((users) => users.cnh)
console.log(pilotos)

//7- forEach

pessoal.forEach((users) => {
   if(users.vivo === true){
        console.log(users)
   }
})

//8- reduce



let folhaSalarial = pessoal.reduce((allsalario,users) => (allsalario+= users.salario),0)

console.log(folhaSalarial)

//9- some

let Csome = pessoal.some((users) => users.nome === 'adson')

console.log(Csome)

//10- every

let Cevery = pessoal.every((usens) => usens.salario)

console.log(Cevery)





