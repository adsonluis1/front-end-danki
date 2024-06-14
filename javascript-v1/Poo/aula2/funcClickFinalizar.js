import createDivSalada from './showSalada.js'

const container = document.querySelector('#container')

function btnFinalizar (salada){
    if(salada.ingredientes.length > 0 & salada.tamanho != null){
        salada.ingredientes.map((ingrediente)=>{
            salada.preco+= ingrediente.preco
        })
        container.setAttribute('class', 'sumir')
        createDivSalada(salada)
    }
} 

const funcClickFinalizar = (element, salada) => {
    const Ifinalizar = document.querySelector('#Ifinalizar')
    Ifinalizar.addEventListener('click',()=>btnFinalizar(salada))


}

export default funcClickFinalizar