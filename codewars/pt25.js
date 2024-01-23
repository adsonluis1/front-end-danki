function sumArray(array) {
    let num = 0
    if( array!= null && array.length >= 3){
        array.splice(array.indexOf(Math.max(...array)),1)
        array.splice(array.indexOf(Math.min(...array)),1)
        array.map((evt)=> num+= evt)
        return num
    }else{return 0}
}

console.log(sumArray([]))

