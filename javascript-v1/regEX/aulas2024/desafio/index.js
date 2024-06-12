const main = document.querySelector('main')
const Iform = document.querySelector('#Iform')
const Iemail = document.querySelector('#Iemail')
const Icpf = document.querySelector('#Icpf')
const Isubmit = document.querySelector('#Isubmit')
const concluidDiv = document.createElement('div')
const errorDiv = document.createElement('div')
const regExCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
const regExEmail =/^[\w.-_]+@[\w.-_]+\.\w+/i

const isVerifictCPF = (cpf)=> regExCPF.test(cpf)
const isVerifictEmail = (email)=> regExEmail.test(email)

function onFormSubmit (evt){
    console.log(regExEmail.test(Iemail.value))
    evt.preventDefault()
    errorDiv.remove()
    if (!isVerifictCPF(Icpf.value) || !isVerifictEmail(Iemail.value)){
        errorDiv.innerHTML= `
            <p>Cpf ou email invalido, verifique novamente</p>
        `
        main.appendChild(errorDiv)
        return
    }
    concluidDiv.innerHTML= `<p>Carregando ...</p>`
    main.appendChild(concluidDiv)
    setTimeout(()=>{
        concluidDiv.innerHTML= `<p>Concluido, seja bem vindo</p>`
        Iemail.value = ''
        Icpf.value = ''
    },1000)
}

Iemail.addEventListener('input',()=>{
    if (!isVerifictEmail(Iemail.value)){
        errorDiv.innerHTML= `
        <p class='error'>Email invalido</p>
       `
       main.appendChild(errorDiv)
    }else{
        errorDiv.remove()
    }
    
})

Icpf.addEventListener(`input`,()=>{
    if (!isVerifictCPF(Icpf.value)){
       errorDiv.innerHTML= `
        <p class='error'>Cpf invalido</p>
       `
       main.appendChild(errorDiv)
    }else{
        errorDiv.remove()
    }
})

Isubmit.addEventListener('click', onFormSubmit)

