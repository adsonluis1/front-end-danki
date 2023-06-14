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

let p= []
let nome=[]
let nome2
let idade = []
let idade2
let v = false
btn_click.addEventListener('click' , (evt)=>{
    // if(inome.value == '' || iidade.value == ''){
    //     alert('preencha corretamente as lacunas')
    // }else{
    tela.innerHTML= ''
    let hehe = (new pessoas(inome.value , iidade.value))
    if(v == false){
    p.push(hehe)
    }
    console.log(p)
    p.map((e)=>{
        nome2 =e.nome 
    })
    if(nome.indexOf(inome.value) != -1){
        alert('aaaaaaaaaaaaaaa')
    }else{
    nome.push(nome2)
    // nome.map((e)=>{
    //     console.log(`nome: ${e}`)
        
    // })
    if(v == true){
        p.push(hehe)
    }
    v = true

    }

    const div = document.createElement('div')
    div.setAttribute('class' , 'div')
    // div.setAttribute('id' , 'div')
    tela.appendChild(div)

    p.map((e)=>{
        // div.innerHTML+= e.nome +'<br>'
        // div.innerHTML+= e.idade +'<br>'
        })
    
    
})