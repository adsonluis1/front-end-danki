import createDivsIngredientes from './addIncredientes.js'
import createTameObs from './tamEObservacoes.js'
import funcClickFinalizar from './funcClickFinalizar.js'

const IdivIncredientes = document.querySelector('#IdivIncredientes')

const salada = {
    tamanho:null,
    preco:'',
    ingredientes:[],
    observacao:'nenhuma'
}

createTameObs(IdivIncredientes,salada)
createDivsIngredientes(IdivIncredientes, salada)
funcClickFinalizar(IdivIncredientes, salada)