const btnAbrir = document.querySelector('#btnAbrir')
const aside = document.querySelector('aside')
const form = document.querySelector('form')
const kanban = document.querySelector('.kanban')
const radios = document.getElementsByName('tipo')
const inputTarefa = document.querySelector('#tarefa')
const coluns = document.querySelectorAll('.containerDivKanban')
let dbTarefas = localStorage.getItem('tarefas')
const btnResetar = document.querySelector('#btnResetar')
const colum = document.querySelectorAll('.colum')
function saveInDb (tarefa){
    const oldTarefas = JSON.parse(localStorage.getItem('tarefas'))
    let exist = false
    oldTarefas.map((oldTarefa)=>{
        if(oldTarefa.id == tarefa.id && !exist){
            oldTarefa.tipo = tarefa.tipo   
            exist = true
        }
    })

    if(!exist)
        oldTarefas.push(tarefa)

    localStorage.setItem('tarefas',JSON.stringify(oldTarefas))
}

function deleteInDb (tarefa){
    const oldTarefas = JSON.parse(localStorage.getItem('tarefas'))
    const newTarefas = oldTarefas.filter((oldTarefa)=> oldTarefa.id != tarefa.id)
    localStorage.setItem('tarefas',JSON.stringify(newTarefas))
    const div = document.getElementById(tarefa.id)
    div.remove()
}

function resetDb (){
    localStorage.clear()
    colum.forEach((currentColum)=>{
        currentColum.innerHTML = ''
    })
}

if(dbTarefas == null){
    localStorage.setItem('tarefas',JSON.stringify([]))
}else {
    JSON.parse(dbTarefas).map((tarefa)=>{
        renderTarefa(tarefa)
    })
}

coluns.forEach((colum)=>{
    colum.addEventListener('dragover',(evt)=>{
        evt.preventDefault()
    })

    colum.addEventListener("drop", (evt) => {
        evt.preventDefault()
        const draggedElement = document.querySelector('.dragging')
        evt.target.querySelector('.colum').appendChild(draggedElement)
        const currentClass = evt.target.querySelector('.colum').className.split(' ')[1]
        console.log(currentClass)
        draggedElement.setAttribute('data-tipo', currentClass)
        const objTarefa = {
            title:draggedElement.getAttribute('data-title'),
            tipo:draggedElement.getAttribute('data-tipo'),
            id:draggedElement.getAttribute('id')
        }

        saveInDb(objTarefa)
        draggedElement.classList.remove('dragging')
      })
})

function renderTarefa (objTarefa){
    const divKanbanTarefa = document.querySelector(`.${objTarefa.tipo}`)
    const div = document.createElement('div')
    div.setAttribute('draggable',true)
    div.setAttribute('id',objTarefa.id)
    div.setAttribute('data-tipo',objTarefa.tipo)
    div.setAttribute('data-title',objTarefa.title)
    div.setAttribute('class',"divTarefa")
    div.innerHTML += `
        <p>${objTarefa.title}</p>
        <div class="divBtn">
            <button id="btnApagar">Apagar</button>
        </div>
    `
    divKanbanTarefa.appendChild(div)
    const btnApagar = document.querySelector('#btnApagar')
    
    btnApagar.addEventListener('click',()=>{
        deleteInDb(objTarefa)
    })
    
    div.addEventListener('dragstart',(evt)=>{
        evt.dataTransfer.setData('text/plain',evt.target.id)
        evt.target.classList.add('dragging')
    })
}

btnAbrir.addEventListener('click', ()=>{
    if(aside.className=='open'){
        btnAbrir.innerText = 'Abrir'
        aside.classList.remove('open')
        kanban.classList.remove('mini')
    }else{
        btnAbrir.innerText = 'Fechar'
        aside.classList.add('open')
        kanban.classList.add('mini')
    }
})

form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    const tarefa = {
        title:inputTarefa.value,
        tipo:'',
        id:Math.floor(Math.random()*999999999999999)
    }

    radios.forEach((radio)=>{
        if(radio.checked)
            tarefa.tipo = radio.value
    })

    saveInDb(tarefa)

    renderTarefa(tarefa)
})

btnResetar.addEventListener('click',()=>{
    resetDb()
})