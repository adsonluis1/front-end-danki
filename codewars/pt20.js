function findShort(s){
    const arr = []
    s.split(' ').forEach((evt)=> {arr.push(evt.length)})
    return Math.min(...arr)
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))