import ingredientes from './incredientes.js'
const IBtnFinalizar = document.querySelector('#Ifinalizar')
const divError = document.createElement('div')

function fistCharInUpper (string){
    string = string.charAt(0).toUpperCase()+string.slice(1)
    return string
}

function addIngrediente (index,salada){
    salada.ingredientes.push(ingredientes[index])
}

function clickFinalizar (element,salada){
    divError.remove()
    if(salada.ingredientes.length < 1){
        divError.innerHTML= `
            <p>Selecione Pelo menos 1 ingrediente</p>
        `
        element.appendChild(divError)
    }
}

async function createDivsIngredientes (element,salada) {
    const section = document.createElement('section')
    section.setAttribute('id','SectionIngredientes')
    ingredientes.sort((a,b)=> a.nome.localeCompare(b.nome))
    ingredientes.map(async (ingrediente,index)=>{
        const divIngredientes = document.createElement('div')
        divIngredientes.setAttribute('class','ingredientes')
        divIngredientes.innerHTML= `
            <h2>${fistCharInUpper(ingrediente.nome)}</h2>
            <h2>Preço: R$ ${ingrediente.preco.toString().replace('.',',')}</h2>
            ${ingrediente.quantidade>0?`<h2>Quantidade:${ingrediente.quantidade}</h2>`:''}
            <button class='btnAdd'>Adicionar</button>
        `
        await section.appendChild(divIngredientes)
        const btnAdd = document.querySelectorAll('.btnAdd')
        btnAdd[index].addEventListener('click',()=>{
            addIngrediente(index,salada)
            console.log(salada)
        })
    })    
    element.appendChild(section)
    IBtnFinalizar.addEventListener('click',()=> clickFinalizar(element,salada))
}

export default createDivsIngredientes