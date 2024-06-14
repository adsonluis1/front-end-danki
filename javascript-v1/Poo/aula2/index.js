import createDivsIngredientes from './addIncredientes.js'
import createTameObs from './tamEObservacoes.js'

const IdivIncredientes = document.querySelector('#IdivIncredientes')

const salada = {
    tamanho:'',
    preco:'',
    ingredientes:[],
    observacao:''
}

createTameObs(IdivIncredientes,salada)
createDivsIngredientes(IdivIncredientes, salada)