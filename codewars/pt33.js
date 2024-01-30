function removeSmallest(numbers) {
    let arr= []
    numbers.map((evt,i)=> {
        if(i != numbers.indexOf(Math.min(...numbers))){
            arr.push(evt)
        }
    })
    return arr
}

console.log(removeSmallest([1, 2, 3, 4, 5]))