function longest(s1, s2) {
    let arr = []
    let arr2 = []

    arr = s1.split('').filter((evt,i)=> s1.split('').indexOf(evt) === i)
    arr2= s2.split('').filter((evt,i)=> s2.split('').indexOf(evt) === i)
    return arr.concat(arr2).filter((evt,i)=> arr.concat(arr2).indexOf(evt) === i).sort((a,b)=> b-a).sort().join('')
    
}

console.log(longest('aaadddsonnn' , 'llluuuiiisssaa'))