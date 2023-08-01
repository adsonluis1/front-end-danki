import { Msg } from "./Cmsg2.js";

const btn_padrao= document.querySelector('#btn_padrao');
const btn_sn = document.querySelector('#btn_sn');

btn_padrao.addEventListener('click' , ()=>{
    new Msg('Isso é apenas um teste click em ok','Teste','padrao').fazer()
})

btn_sn.addEventListener('click' , ()=>{
    new Msg('click em sim, para abrir um video','Quer abrir o iframe ?','sn').fazer()
})
   
   
 