
const tela= document.getElementById('tela')
const btn_setar= document.getElementById('btn_setar')
const btn_reset= document.getElementById('btn_reset')
const btn_go= document.getElementById('btn_go')
const hehe = document.getElementById('hehe')
const temp = document.getElementById('temp')
const pisca = document.getElementById('pisca')

btn_setar.addEventListener('click' , (evt)=>{
    hehe.classList.add('hehe1')
})
btn_go.addEventListener('click' , ()=>{
if(hehe.className== 'hehe1'){
    if(temp.value == 0){
        tela.innerHTML= 'ERRO'
    }else{
        let tempS= temp.value 
        tela.innerHTML= tempS
        let interval =setInterval(()=>{
        tempS = tempS -1
        tela.innerHTML= tempS
        console.log(tela.innerText)
        },1000)
       
        let interval2 = setTimeout((e)=>{
            clearInterval(interval)
            setInterval((e)=>{
                pisca.style.backgroundColor= 'red'
            },500)
            setInterval((e)=>{
                pisca.style.backgroundColor= 'white'
            },1000)
        },temp.value *1000)    
        temp.value = ''
    }
    }


    btn_reset.addEventListener('click' , (e)=>{
        clearInterval(interval2)
    })
    })


