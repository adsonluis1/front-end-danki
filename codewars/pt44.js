function isPangram(string){
    let arr = []
    string.split('').map((evt)=>{
        if(evt.toLowerCase().charCodeAt() >= 97 && evt.toLowerCase().charCodeAt() <= 122){
            arr.push(evt)
        }
    })    
    return [...new Set(arr)].length >= 26?true:false
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
