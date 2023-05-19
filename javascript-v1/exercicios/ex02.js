var text_curso = document.querySelector('#icurso')
var b1 = document.querySelector('#b1')
var b2 = document.querySelector('#b2')
var b3 = document.querySelector('#b3')
var tela_curso = document.querySelector('#cursos')
var radio = [...document.getElementsByName('radio1')]
var tela = document.querySelector('#tela')
var articl = document.getElementById('tela')
var a_button = document.querySelectorAll('.a_button')

b3.addEventListener('click' , (evt)=>{

    const selecionados = radio.filter((el , i)=>{
        return el.checked
        })
        
        selecionados.map((e)=>{
                let div = e.parentNode
                
                var linguagem = div.firstChild.textContent
               
                alert('curso escolhido ↓     ' + linguagem + '  ↑')
                
        })
        
    })

b2.addEventListener('click' , ()=>{

    const selecionados = radio.filter((el , i)=>{
        return el.checked
        })

        selecionados.map((e)=>{

            let div = e.parentNode
            
            div.remove()

        })

})

const criarcurso = ()=>{
    var div = document.createElement('div')
    div.setAttribute('input' , 'radio')
    div.setAttribute('class' , 'a_button')
    div.setAttribute('id' , 'a')
    articl.appendChild(div)
    
}

b1.addEventListener('click' , ()=>{
    criarcurso()
    a_button.innerText= text_curso.value
})



