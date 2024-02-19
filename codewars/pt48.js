var uniqueInOrder=function(iterable){
    return typeof iterable == 'string'?iterable.split('').filter((e,i,a)=> e != a[i-1]):iterable.filter((e,i,a)=> e != a[i-1])
}

console.log(uniqueInOrder([3,0,0,3,0]))

