function comp(array1, array2){
    if(Array.isArray(array1) && Array.isArray(array2)){
        let arr = []
    array1.map((e)=>{
        arr.push(Math.pow(e,2))
    })
    
    arr.sort((a,b)=> a-b)
    array2.sort((a,b)=> a-b)
    return JSON.stringify(arr) === JSON.stringify(array2)
    }else
        return null
    
  }

console.log(comp([10,20],null))
