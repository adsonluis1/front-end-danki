const iano = document.getElementById('iano')
const btn_enviar = document.getElementById('btn_enviar')
const tela = document.getElementById('tela')
const p_data = document.getElementById('data')
btn_enviar.addEventListener('click' , ()=>{
    if(iano.value == ''){
        alert('sem anotação')
    }else{
        const id = Date.now() + '_' + Math.floor(Math.random()*100000000000)
        const idp= Date.now() + '_' + Math.floor(Math.random()*100000000000)
        const idbtn= Date.now() + '_' + Math.floor(Math.random()*100000000000)
        const labelid = Date.now() + '_' + Math.floor(Math.random()*100000000000)
        const check= document.createElement('input')
        const p = document.createElement('p')
        p.setAttribute('id' , idp)
        tela.appendChild(p)
        check.setAttribute('type' , 'checkbox')
        check.setAttribute('id' , id)
        p.appendChild(check)  
        const label = document.createElement('label')
        label.setAttribute('for' , id)
        label.setAttribute('id' , labelid)
        p.appendChild(label)
        label.innerHTML= `${iano.value}`
        const btn = document.createElement('button')
        btn.setAttribute('id' , idbtn)
        btn.innerHTML= '🗑️'
        p.appendChild(btn)
        const hr = document.createElement('hr')
        p.appendChild(hr)
        
        btn.addEventListener('click', (evt)=>{
            evt.target.parentNode.remove()    
        })        
        check.addEventListener('click' , (evt)=>{
            if(evt.target.checked){
                evt.target.parentNode.childNodes[1].setAttribute('class' , 'risco')
            }else if(evt.target.checked == false){
                evt.target.parentNode.childNodes[1].removeAttribute('class' , 'risco')
            }
            
        })
    }

        iano.value = ''
})

const date = new Date
let dia = date.getDate()
dia= dia<10?'0'+dia: dia
let mes= date.getMonth() +1 
mes = mes<10? '0'+ mes: mes
let ano= date.getFullYear()
p_data.innerHTML= `${dia}/${mes}/${ano}`



