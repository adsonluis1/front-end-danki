const bancoDeDados = [
    {
        nome:'Saitama',
        genero:'H',
        idade:25,
        poderes:['Sem limitador fisico'],
        nivelDeForca:'1-S',
    },
    {
        nome:'Son Goku',
        genero:'H',
        idade:41,
        poderes:['Rajada de energia','voar','atributos fisicos melhorados'],
        nivelDeForca:'1-S',
    },
    {
        nome:'Super-Man',
        genero:'H',
        idade:33,
        poderes:['Super Força','Super Velocidade','Laser','Sopro congelante','Sopro De Calor'],
        nivelDeForca:'2-A',
    },
    {
        nome:'Flash',
        genero:'H',
        idade:22,
        poderes:['Super Velocidade'],
        nivelDeForca:'1-S',
    },
    {
        nome:'Mulher Maravilha',
        genero:'M',
        idade:33,
        poderes:['Super Força','Super Velocidade'],
        nivelDeForca:'2-B',
    },
    {
        nome:'Homem Aranha',
        genero:'H',
        idade: 17,
        poderes:['Força sobre Humana','Sentido Aranha','Teia','Reflexos sobre Humano'],
        nivelDeForca:'3-B',
    },
]

let data

const get = (tipo, quantos= bancoDeDados.length)=>{
    if(tipo == 'genero'){
        data = bancoDeDados.sort((a,b) => a.genero.localeCompare(b.genero))
    }else if(tipo == 'idade'){
        data= bancoDeDados.sort((a,b) => a.idade - b.idade)
    }else if(tipo == 'poderes'){
        data= bancoDeDados.sort((a,b) => a.poderes.length - b.poderes.length)
    }else if(tipo == 'nome'){
        data = bancoDeDados.sort((a,b) => a.nome.localeCompare(b.nome))
    }else if(tipo == 'forca'){
        data = bancoDeDados.sort((a,b) => a.nivelDeForca.localeCompare(b.nivelDeForca))
    }

    console.log(data.slice(0,quantos))
}

get('idade',3)