class pessoas{
    constructor(inome , iidade){
        this.nome = inome
        this.idade = iidade
    }
}

const inome = document.getElementById('inome')
const iidade = document.getElementById('iidade')
const btn_click = document.getElementById('click')
const tela = document.getElementById('tela')
let nome = []
let idade = []
let v = false
btn_click.addEventListener('click' , (evt)=>{
    if(inome.value == '' || iidade.value == ''){
        alert('preencha as informações de maneira correta')
    }else{
    let vddnome=(new pessoas(inome.value).nome)
    let vddidade=(new pessoas('', iidade.value).idade)
    if(nome.indexOf(inome.value) != -1){
        alert('nn pode ter nomes reptidos')
    }else{
        v = true
        if(v == true){
            const div = document.createElement('div')
            div.setAttribute('class' , 'div')
            div.setAttribute('id' , 'div')
            tela.appendChild(div)
            tela.innerHTML= ''
        }
        nome.push(vddnome)
        idade.push(vddidade)
        nome.map((e)=>{
            tela.innerHTML+=(`nome: ${e} <br>`)
        })
        idade.map((e)=>{
            tela.innerHTML+=(`idade: ${e} <br>`)
        })
    }
    
    }


})
