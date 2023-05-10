var num = 7

if(num > 5){
    console.log('maior que 5')
     if(num%2 == 0){  // usei o aninhamento, ele so faz o aninhamento quando a primeira verificação é verdadeira
        console.log('par')
    }else{
        console.log('impar')
    }
}else if(num < 5){
    console.log('menor que 5')
    if(num < 1){
        console.log('coloque um numero maior que 0')
    }
}

// ----------------------------------------------------

// if com aninhamento e mais complexo
const clima = 'sol'
const saude = 'saudavel'
const dinheiro = 500
const energia = 90

if(clima == 'sol'){
    var clima1 = true
}else{
    console.log('nao posso ir, o clima esta ruim')
}if(saude == 'saudavel'){
    var saude1 = true
}else{
    console.log('nn posso ir, estou doente')
}if(dinheiro >= 300){
   var dinheiro1 = true
}else{
    console.log('nn posso ir, estou sem dinheiro')
}if(energia >= 70){
    var energia1 = true
}else{
    console.log('nn posso ir, estou cansado')
}if(clima1 == true && saude1 == true && dinheiro1 == true && energia1 == true){
    console.log('podemos ir')
}

