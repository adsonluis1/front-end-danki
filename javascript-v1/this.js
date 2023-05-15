function aluno(nome , nota){
    this.nome = nome
    this.nota = nota

    this.arrow=()=>{
        setTimeout(()=>{

            console.log(this.nome)
            console.log(this.nota)

        },2000)
    }
}
const al1 = new aluno('adson' , 10)
al1.arrow()


// var aluno = {
//     nome: 'adson',
//     nota: 10 ,
//     falarNome: function(){
//         console.log (this.nome)
//     },
//     falarNota:function(){
//         console.log(this.nota)
//     }
// }    

// aluno.falarNome()
// aluno.falarNota()


