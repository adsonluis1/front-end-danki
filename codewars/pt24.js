function isTriangle(a,b,c)
{
    let arr= [a,b,c]
    let max = Math.max(a,b,c)
    arr.splice(arr.indexOf(max),1)
    return arr[0] + arr[1] > max? true :false
}

console.log(isTriangle(3,5,1))