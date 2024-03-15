function twoSum(numbers, target) {
    let arr
    for(let a = 0;a<=numbers.length;a++){
        for(let b = a+1;b<=numbers.length;b++){
            if(numbers[a]+numbers[b] == target)
                arr = [a,b]
        }  
    }
    return arr
}

console.log(twoSum([1234, 5678,3080,9012], 14690))