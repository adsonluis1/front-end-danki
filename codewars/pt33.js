function removeSmallest(numbers) {
    // numbers.splice(numbers.indexOf(Math.min(...numbers)),1)
    // return numbers
    let arr= []
    numbers.map((evt,i)=> {
        if(i != numbers.indexOf(Math.min(...numbers))){
            arr.push(evt)
        }
    })
    return arr
}

console.log(removeSmallest([1, 2, 3, 4, 5]))