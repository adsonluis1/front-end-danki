const pessoa = {
    nome : 'adson',
    idade : '18',
    estado : 'sergipe' ,
    moradia : 'white sand' , 
    pai : 'jose adailson' ,
    mae : 'patricia' ,
    estadoCivil : 'solteiro'
}
const { idade ,  nome , estado , estadoCivil , mae , moradia , pai} = pessoa

console.log(nome)

const pessoa2 = { 
    nome2 : 'adson',
    idade2 : '18',
    estado2 : 'sergipe' ,
    moradia2 : 'white sand' , 
    pai2 : 'jose adailson' ,
    mae2 : 'patricia' ,
    estadoCivil2 : 'solteiro',
    linguagens : [
        'portugues',
        'js',
        'ingles',
        'ts',
        'c'
    ]
}
const { nome2 , idade2 , estado2 , estadoCivil2 , mae2 , moradia2 , pai2 , linguagens} = pessoa2
 
console.log(nome2)