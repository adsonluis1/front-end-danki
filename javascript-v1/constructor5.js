const inome = document.getElementById('inome')
const iidade = document.getElementById('iidade')
const btn_click = document.getElementById('click')
const tela = document.getElementById('tela')

class pessoas{
    constructor(inome , iidade){
        this.nome = inome
        this.idade = iidade
    }
}

let array_nomes = []
let p = []
btn_click.addEventListener('click' , ()=>{
    if(inome.value == '' || iidade.value == ''){
        alert('preencha as lacunas corretamente')
    }else{
    
        if(array_nomes.indexOf(inome.value) != -1){
            alert('numero reptido')
        }else{
            tela.innerHTML= ''
            let hehe= new pessoas(inome.value, iidade.value)
            p.push(hehe)
            p.forEach((e)=>{
            const div= document.createElement('div')
            div.setAttribute('class' , 'div')
            tela.appendChild(div)
            array_nomes.push(inome.value)
            console.log(e)
            div.innerHTML+='nome: ' + e.nome + '<br>'
            div.innerHTML+='idade: ' + e.idade + '<br>'
    })
        console.log(p)
       
    }
}
})
