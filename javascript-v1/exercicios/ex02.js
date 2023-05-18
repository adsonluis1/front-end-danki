var text_curso = document.querySelector('#icursos')
var b1 = document.querySelector('#b1')
var b2 = document.querySelector('#b2')
var b3 = document.querySelector('#b3')
var tela_curso = document.querySelector('#cursos')
var radio = [...document.getElementsByName('radio1')]
    
    

    b3.addEventListener('click' , (evt)=>{

    const selecionados = radio.filter((el , i)=>{

        return el.checked

        })
    
    })

    b2.addEventListener('click' , (evt)=>{
        const selecionado = radio.filter((el)=>{
            return el.target
        })

        tela_curso.removeChild(selecionado)

    })