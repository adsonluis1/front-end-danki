var num1 = 10
var num2 = 0

res=(num1 > num2 ? 'verdade': 'falso')

// console.log(res)

var pessoa ={
    'nome': 'adson',
    'idade': 18
}

res2=(pessoa.nome != 'adson' ? 'falso' : 'verdadeiro')
res3=(pessoa.idade != 18 ? 'falso' : 'verdadeiro')

// console.log(res2)
// console.log(res3)

if(res2 == 'verdadeiro' && res3 == 'falso'){
    console.log('ola Adson, sua idade esta incorreta')
}else if(res2 == 'verdadeiro' && res3 == 'verdadeiro'){
    console.log('bem vindo Adson')
}else{
    console.log('alguma coisa esta errado, verifique seu nome e idade')
}