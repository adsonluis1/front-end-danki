// conceito de encapsulamento

const ingredientes = ['mel', 'água','sal','mostarda']

const sortAlpha = (arr)=> arr.sort((a,b)=> a.localeCompare(b))

function fistCharInUpper (arr){
    arr = arr.map((elemento)=> elemento.charAt(0).toUpperCase()+elemento.slice(1))
    return arr
}

const fistCharInupperAndSortAlpha = (arr)=> sortAlpha(fistCharInUpper(arr))

console.log(fistCharInupperAndSortAlpha(ingredientes))
