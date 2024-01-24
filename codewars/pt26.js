function findDifference(a, b) {
    let num = 1
    let num2= 1
    a.map((evt)=> num *= evt)
    b.map((evt)=> num2 *= evt)
    return num - num2 < 0? (num - num2) *-1:num - num2
}

console.log(findDifference([13,5,7], [25,7,6]))
