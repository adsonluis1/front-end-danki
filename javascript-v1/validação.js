const btn = document.querySelector('#btn')
const inota = document.querySelector('#inota')
const inome = document.querySelector('#inome')
const tela_nota = document.querySelector('#tela_nota')
const tela_nome = document.querySelector('#tela_nome')
btn.addEventListener('click' , (evt)=>{
    let msg_nota = null
    let msg_nome = null

    if(!inota.checkValidity()){
        msg_nota = inota.validationMessage    
        tela_nota.innerHTML= `${msg_nota} <br>`  
    }else{
        tela_nota.innerHTML= ''
    }

    if(!inome.checkValidity()){
        msg_nome= inome.validationMessage
        tela_nome.innerHTML= `${msg_nome} <br>`
    }else{
        tela_nome.innerHTML= ''
    }
    
   
    // evt.preventDefault()
})