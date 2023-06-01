class pessoa{
    constructor(inome , iidade){
        this.inome = inome
        this.iidade = iidade
    }
}


let pessoas= []
const btn = document.getElementById('click')
btn.addEventListener('click' , (evt)=>{
    let inome= document.getElementById('inome')
    let iidade= document.getElementById('iidade')
    if(inome.value == '' && iidade.value == ''){
        alert('preencha as formularios')
    }else{
    const p = (new pessoa(inome.value , iidade.value))
    pessoas.push(p)
    console.log(pessoas)
    }
})





