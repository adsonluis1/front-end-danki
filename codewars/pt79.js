function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b)=> a-b)
    return numbers[0]+numbers[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))