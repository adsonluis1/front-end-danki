function latestClock(a, b, c, d) {
    const arr = [a,b,c,d]
    arr.sort((a,b)=> b-a)
    console.log(arr)
    let h = ''
    for(let a= 0;a<=arr.length;a++){
        if(arr[a] <2 && arr[a]!= 0){
            h+=arr[a].toString()
        }
        if(arr[a] <4){
            h+=arr[a].toString()
        }
    }

    
    console.log(arr)
    console.log(h)
}

latestClock(2,3,0,0)