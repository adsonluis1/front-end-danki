const main = document.querySelector('main')
const section = document.createElement('section')

function createDivSalada (salada){
    console.log(salada)
    const ingredientes = []
    salada.ingredientes.map((e)=>{
        ingredientes.push(e.nome)
    })
    ingredientes.sort()
    section.innerHTML= ` 
        <div>
            <h1>Detalhes</h1>
            <h2>Tamanho:${salada.tamanho}</h2>
            <h2>Ingredientes: ${ingredientes.join(', ')}</h2>
            <h2>Preço:${salada.preco}</h2>
            <h2>Obervação:${salada.observacao}</h2>
        </div>
    `
    main.appendChild(section)
}

export default createDivSalada