const inome = document.getElementById('inome')
const iportas = document.getElementById('iportas')
const div_militar = document.getElementById('militar')
const txt_municao = document.getElementById('imunicao')
const radio_militar= document.getElementById('itanque')
const iblindagem= document.getElementById('iblindagem')
const imunicao= document.getElementById('imunicao')
const button = document.getElementById('button')
const radio_normal = document.getElementById('inormal')
const principal = document.getElementById('principal')
let vr= 'normal'

radio_militar.addEventListener('click' , ()=>{
    div_militar.style.display= 'block'
    vr= 'militar'    
})
radio_normal.addEventListener('click' , ()=>{
    div_militar.style.display= 'none'
    vr= 'normal'
})

class carro{
    constructor(inome, iportas){
    this.nome = inome
    this.portas = iportas
    }
}

class militar extends carro{
    constructor(inome, iportas, iblindagem, imunicao){
        super(inome , iportas)
        this.blindagem = iblindagem
        this.municao = imunicao
    }
}




button.addEventListener('click' , (evt)=>{
    let div= document.createElement('div')
    div.setAttribute('id' , 'tela')
    let lixeira= document.createElement('button')
    lixeira.setAttribute('id' , 'lixeira')
    lixeira.innerHTML= '🗑️'
    if(vr == 'militar'){
    const c2= new militar(inome.value, iportas.value, iblindagem.value, imunicao.value)
    if(iblindagem.value <= 100 && Number(iblindagem.value) > 0){
    div.innerHTML+= `carro militar <br>nome: ${c2.nome} <br> portas: ${c2.portas} <br> blindagem: ${c2.blindagem} <br> municão: ${c2.municao}`  
    principal.appendChild(div)
    div.appendChild(lixeira)

    lixeira.addEventListener('click' , (evt)=>{
        principal.removeChild(evt.target.parentElement)
    })
    }else{
        alert('a blindagem nn pode passar de 100 e nem ser menor que 0')
    }

}
    if(vr == 'normal'){
    const c1= new carro(inome.value, iportas.value)
    div.innerHTML=`carro normal <br>nome: ${c1.nome} <br> portas: ${c1.portas} <br>`
    principal.appendChild(div)
    div.appendChild(lixeira)

    lixeira.addEventListener('click' , (evt)=>{
    principal.removeChild(evt.target.parentElement)
       console.log(evt.target.parentNode)
    })
    }
    inome.value= ''
    iportas.value= ''
    iblindagem.value= ''
    imunicao.value= ''
})