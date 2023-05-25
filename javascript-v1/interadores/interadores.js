const numeros = [10 , 3 , 4 ,6 ,5 ,11 ,7]
const ver_num = numeros[Symbol.iterator]()

console.log(numeros)
console.log('----------------------')
// jeito 'normal'
// console.log(ver_num.next())
// console.log(ver_num.next())
// console.log(ver_num.next())
// console.log(ver_num.next())
// console.log(ver_num.next())
// console.log(ver_num.next())
// console.log(ver_num.next())
// console.log(ver_num.next()) 

// jeito simples

for(a in numeros){
    console.log(ver_num.next())
}
