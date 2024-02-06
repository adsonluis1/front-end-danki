function arrayDiff(a, b) {
    // pegar o numero de b 
    // pesquisar b no array 
    // retomar o index de b
    // apagar b do array a
    b.map((evt)=>{
        while(a.some((e)=>e==evt)){
            a.splice(a.indexOf(evt),1)
        }
    })
   return a
}


console.log(arrayDiff([1,3,5,6,7],[3,5]))
