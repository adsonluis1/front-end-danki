function alphabetPosition(text) {
    let arr=[]
    'a'.charCodeAt
    text.split('').map(evt=>{
        if(evt.toLowerCase().charCodeAt()>96 && evt.toLowerCase().charCodeAt()<123)
        arr.push(evt.toLowerCase().charCodeAt()-96)
    })   
    return arr.join(' ')
}

console.log(alphabetPosition('The sunset sets at twelve o clock'))