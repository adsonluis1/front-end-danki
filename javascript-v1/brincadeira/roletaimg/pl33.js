const a = function(num){
    if(typeof(num) == 'string'){
        console.log('Error')
    }else{
        const num2= num * 50 + 6
        console.log(num2)
    }
}

a()
