class pessoa{
    constructor(inome , iidade){
        this.inome = inome
        this.iidade = iidade
    }
}

let nomes = []
let pessoas= []
const btn = document.getElementById('click')
btn.addEventListener('click' , (evt)=>{
    let iinome= document.getElementById('inome')
    let iidade= document.getElementById('iidade')
    if(iinome.value == '' && iidade.value == ''){
        alert('preencha as formularios')
    }else{
    
    const p = (new pessoa(iinome.value , iidade.value))
    pessoas.push(p)
    pessoas.map((e)=>{
        console.log(`nome: ${e.inome}`)
        console.log(`idade: ${e.iidade}`)
        })
    console.log(pessoas)
    }
    }
)
    






