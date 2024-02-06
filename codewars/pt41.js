var searchArray = function (arrayToSearch, query) {
    if(query.length != 2) return new Error
    let a = []
    arrayToSearch.map((evt,i)=>{
        if(evt.length !=2) return new Error
        else if(evt[0] === query[0] && evt[1] === query[1]){
            a.push(i)
        }
    })
    return a.length>=1?a[0]:-1
}

console.log(searchArray([[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87,5],[4,5],[2,7],[6,32]],[10,20]))