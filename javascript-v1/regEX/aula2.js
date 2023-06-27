const nome= 'adson luis rodrigues de almeida 1 2 3 4 5 6 7 8 9'

console.log(nome.match(/[al]/ig))
// ele ta procurando todas as letras 'a' e 's'

console.log(nome.match(/[a-t]/ig))
// ele ta procurando todas as letras de 'a' ate 't'

console.log(nome.match(/[0-9]/ig))
// ele ta procurando todos os numeros de 0 ate 9

console.log(nome.match(/\d/g))
// ele ta procurando todos os numeores do string por causa do regEx '\d'

console.log(nome.match(/\s/ig))
// ele ta procurando todos os espaços

console.log(nome.match(/\ba/ig))
// ele ta procurando todas as letras a
console.log('----------------------------')
const num = '1, 10 , 100 , 1000'

console.log(num.match(/10/g))
// ele pega todos os 10 sem pergar a contuniudade e o meio

console.log(num.match(/10*/g))
// ele pega todos os 1 e 10 e inclui com oq vem dps

console.log(num.match(/10?/g))
// ele pega o numero antes do 10 e o 10 

console.log(num.match(/10+/g))
// ele pega o numero dps do 10

