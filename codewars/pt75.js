function multImplication(arr) {
    return arr.length == 1?arr[0]:arr.length == 0? null:arr.length> 1 && arr[arr.length-2] == true && arr[arr.length-1] == false?false:true
}

console.log(multImplication([true, false]))