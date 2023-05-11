var a = 0 
var pares = 0
var impares = 0

for(var a; a < 20; a++){
    
    if(a%2 == 0){
        console.log('adson ' + a + ' par' )
        pares++
    }else{
        console.log('adson ' + a + ' impar')
        impares++
    }
}

console.log('quantidade de pares ' + pares)
console.log('quantidade de impares ' + impares )