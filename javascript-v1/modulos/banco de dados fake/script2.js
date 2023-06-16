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
        div.child
        div.lastChild.addEventListener('click' , (evt)=>{
            let nomes =evt.target.parentNode.childNodes[0]
            let numero_tel =evt.target.parentNode.childNodes[2]
            let eemail= evt.target.parentNode.childNodes[4]
           
            




               var index = contatos.indexOf(nomes)
               if(index > -1){
                contatos.splice(index, 1)
               }
            // tela.removeChild(evt.target.parentNode)
            console.log(contatos)

       
            
        })
        
    
    }
        
    }
    
    

export default contato