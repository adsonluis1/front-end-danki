function correct(string)
{   
    let arr = string.split('')

    while(arr.includes('5')){
        arr.splice(arr.indexOf('5'), 1 ,'s')
    }

    while(arr.includes('0')){
        arr.splice(arr.indexOf('0'),1,'o')
    }

    while(arr.includes('1')){
        arr.splice(arr.indexOf('1'),1,'i')
    }

    const nomef = arr.toString().replace(/,/g,'')

    return nomef.toUpperCase()
   
}


console.log(correct('L0ND0N'))
console.log(correct("DUBL1N"))
console.log(correct("51NGAP0RE"))
console.log(correct("BUDAPE5T"))
console.log(correct("PAR15"))
console.log(correct('J. K. R0WL1NG - HARRY P0TTER AND THE PR150NER OF AZKABAN'))


// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1 


