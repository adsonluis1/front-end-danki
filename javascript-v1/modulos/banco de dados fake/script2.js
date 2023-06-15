import { contatos } from "./bancodados.js";

const tela= document.getElementById('tela')
let nome
let numero
let email
let contato={
    getcontatos:()=>{
        return contatos
    },
    setnome:(inome)=>{
        nome= inome
        console.log(nome)
    },
    setnumero:(itele)=>{
        numero= itele
        console.log(numero)
    },
    setemail:(iemail)=>{
        email= iemail
        console.log(email)
    },
    creatediv:(evt)=>{
        const div = document.createElement('div')
        div.setAttribute('class' , 'gaveta')
        tela.appendChild(div)
        div.innerHTML+= nome + '<br>'
        div.innerHTML+= numero + '<br>'
        div.innerHTML+= email + '<br>'
        const btn = document.createElement('button')
        btn.setAttribute('class' , 'btn2')
        div.appendChild(btn)
        btn.innerHTML= '🗑️'
        div.lastChild.addEventListener('click' , (evt)=>{
            tela.removeChild(evt.target.parentNode)
        })
        
    
    }
        
    }
    
    

export default contato