function repeatAdjacent(s) {
    // let g = []
    // s.split('').map((e,i,a)=>{
    //     if(e===a[i+1]){
    //       g.push(e)
    //     }
    //     else{
    //         g.push(e)
    //       }

    // })
    // return g
    return s.split('').filter((e,i,a)=> e != a[i+1])
}

console.log(repeatAdjacent('aaaannnnnbbbbcccwzzy'))