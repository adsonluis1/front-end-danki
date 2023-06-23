const nome= 'adson luis rodrigues de almeida 1 2 3 4 5 6 7 8 9'

console.log(nome.match(/[as]/ig))
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