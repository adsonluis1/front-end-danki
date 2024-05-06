// a = t & c = g
// selecionar um por um
function dnaStrand(dna){
    let newDna = ''
    dna.split('').map((e)=>{
    if(e=='A')
        newDna+= 'T'
    else if(e=='T')
        newDna+= 'A'
    else if(e=='C')
        newDna+= 'G'
    else if(e=='G')
        newDna+= 'C'
   })
   return newDna
}

console.log(dnaStrand('AAAA'))