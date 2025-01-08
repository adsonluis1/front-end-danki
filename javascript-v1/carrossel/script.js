const inputs = document.querySelector('.controllers').querySelectorAll('input')
const itens = document.querySelectorAll('.item')
inputs.forEach((radio)=>{
    radio.addEventListener('click',nextItem)
})

let index = 0

function proxItem (){
    if(index < 2){
        index++
    }else{
        index = 0
    }
    
   inputs[index].checked = true

    itens.forEach((item)=>{
        item.style = `transition: .4s;
    transform: translateX(-${index * 100}%);`
    })
}

let interval = setInterval(()=>{
    proxItem()
},3000)

function nextItem (evt){
    index = Number(evt.target.getAttribute("id"))
    console.log(index)
    itens.forEach((item)=>{
        item.style = `transition: .4s;
    transform: translateX(-${index * 100}%);`
    })

    clearInterval(interval)
    interval = setInterval(()=>{
        proxItem()
    },3000)

}

