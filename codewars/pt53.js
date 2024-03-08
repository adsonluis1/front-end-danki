function stonePick(arr) {
    // let cobblestone = 0
    // let stick = 0
    // let stonePicks = 0
    // arr.map((e)=>{
    //     if(e == 'Cobblestone') cobblestone++
    //     if(e == 'Sticks') stick++
    //     if(e == 'Wood') stick+=4
    //     if(cobblestone>2 && stick>1){
    //         stonePicks++
    //         stick-= 2
    //         cobblestone-= 3
    //     }
    // })

    // return stonePicks

    return Math.min(Math.floor(arr.filter(e=>e=='Cobblestone').length/3), Math.floor(arr.filter(e=>e=='Wood').length*4/2))
}

console.log(stonePick(['Wood','Wood', 'Wood','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone', 'Cobblestone','Cobblestone']))