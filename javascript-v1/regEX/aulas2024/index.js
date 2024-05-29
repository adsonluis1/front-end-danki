const Itext = document.querySelector('#Itext')
const Iflag = document.querySelector('#Iflag')
const Itest = document.querySelector('#Itest')
const ItextArea = document.querySelector('#ItextArea')
const form = document.querySelector('form')
const div = document.createElement('div')

Itest.addEventListener('click', ()=>{
    const regex = new RegExp(Itext.value,Iflag.value)
    const input = ItextArea.value.match(regex)
    let textValue = ItextArea.value
    input.map((e)=>{
        textValue = textValue.replaceAll(e,`<span>${e}</span>`)
    })
    div.setAttribute('id','Itela')
    div.innerHTML = `${textValue}`
    form.appendChild(div) 
    div.removeAttribute('class','sumir')
    ItextArea.setAttribute('class','sumir')
})

div.addEventListener('click', ()=>{
    ItextArea.removeAttribute('class','sumir')
    ItextArea.focus()
    div.setAttribute('class','sumir')
})


