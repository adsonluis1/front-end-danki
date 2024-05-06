var number=function(array){
    return array.length>0?array.map((e,i)=> `${i+1}: ${e}`): []
}

console.log(number(["a", "b", "c"]))