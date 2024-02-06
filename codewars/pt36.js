function arrayDiff(a, b) {
    b.map((evt)=>{
        while(a.some((e)=>e==evt)){
            a.splice(a.indexOf(evt),1)
        }
    })
   return a
}


console.log(arrayDiff([1,3,5,6,7],[3,5]))
