import contato from "./script2.js";
import { contatos } from "./bancodados.js";

const inome = document.getElementById('inome')
const iemail = document.getElementById('iemail')
const itele = document.getElementById('itele')
const btn = document.getElementById('btn')
const tela = document.getElementById('tela')


btn.addEventListener('click' , ()=>{
    let v = contatos.indexOf(iemail.value)
    let v2= contatos.indexOf(itele.value)
    
    if(v != -1){
        alert('nao pode reptir o msm email')
    }else if(v2 != -1){
        alert('nao pode reptir o msm numero')
    }else{
        contatos.push(inome.value)
        contatos.push(iemail.value)
        contatos.push(itele.value)
        contato.setnome(inome.value)
        contato.setemail(iemail.value)
        contato.setnumero(itele.value)
        contato.creatediv()
        contato.colocarnome()
        console.log(contato.getcontatos())
    }
    
    

})
