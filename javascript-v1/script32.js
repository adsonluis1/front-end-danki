
const tel= document.getElementById('tela')
const tela2= document.getElementById('tela2')
const div= document.createElement('div')
div.setAttribute('id' , 'quadrado')
tela2.appendChild(div)
const promice = new Promise((ex , rej)=>{
    const v = true
    setTimeout(()=>{
    if(v){
        ex('tudo certo')
    }else{
        rej('tudo errado')
    }
    },3000)
})

promice.then((rest)=>{
    div.classList.add('haha')
    div.classList.remove('quadrado')
})
promice.catch((rest)=>{
    tel.innerHTML= rest
    tel.classList.add('notok')
    tel.classList.remove('ok')
})

tel.innerHTML= 'processando...'

const quadrado = document.getElementById('quadrado')


quadrado.addEventListener('click' , (evt)=>{
    quadrado.classList.add('haha2')
    quadrado.innerHTML= 'parabens pra vc'
})