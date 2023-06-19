let nomes= ['adson' , 'anne' , '132442' , 'ratinho' ,'miles']
let nomes2 = []

nomes.forEach((e)=>{
   if(e != 'anne' && e != 'ratinho'){
    nomes2.push(e)
   }
})

console.log(nomes2)