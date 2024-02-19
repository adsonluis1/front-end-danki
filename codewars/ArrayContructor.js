const arr = new Array(10)
const arr2 = Array.from(('adson' + 'luis'),(evt,i) => [...new Set(evt)]).join('')
console.log(arr2)

function tirandoDuplicadas(fistName, secondName){
    let arr = fistName.split('').concat(secondName.split(''))
    return [...new Set(arr)].sort().join('')
}

console.log(tirandoDuplicadas('adson','luisss'))