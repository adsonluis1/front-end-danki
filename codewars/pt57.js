function isValidWalk(walk) {
    let num = 0
    walk.map(e=>{
        if(e == 'n') num++
        if(e == 's') num--
        if(e == 'e') num+=2
        if(e == 'w') num-=2
    })
    return  walk.length==10 && num == 0? true : false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))

