const nome ='adson luis rodrigues de almeida'

console.log(nome.search('Adson'))
// ele nn encontra por causa do 'A' no adson

console.log(nome.search(/Adson/i))
// ele encontra porq o 'i' do regEx faz ele ignorar o casesencitive

console.log(nome.match('s'))
// ele retona apenas 1 's'


console.log(nome.match(/s/g))
// ele retorn todos os s por causa do 'g' do regEx que faz ele usar o global 

console.log(nome.replace('S', 'anne'))
// ele está pedindo pra transformar todos os 'S' em anne mas nn tem nenhum 's' maisculo

console.log(nome.replace(/S/ig, 'anne'))
// ele trasformou todos por causa do 'g' do regEx os S em anne incluondo maiusculos e minusculos por casua do 'i' do regEx 