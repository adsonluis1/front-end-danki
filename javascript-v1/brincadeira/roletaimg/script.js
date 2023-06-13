const btn1= document.getElementById('btn1')
const btn2= document.getElementById('btn2')
const img1= document.getElementById('img1')
const img2= document.getElementById('img2')
const img3= document.getElementById('img3')
const sele_1= document.getElementById('sele_1')
const sele_2= document.getElementById('sele_2')
const sele_3= document.getElementById('sele_3')

btn2.addEventListener('click' , ()=>{
    if(img2.className == 'selecionado'){
    img2.classList.remove('selecionado')
    img3.classList.add('selecionado')
    }
    else if(img3.className == 'selecionado'){
        img3.classList.remove('selecionado')
        img1.classList.add('selecionado')
        }
        else if(img1.className == 'selecionado'){
            img1.classList.remove('selecionado')
            img2.classList.add('selecionado')
            }

})

btn1.addEventListener('click' ,()=>{
    if(img2.className== 'selecionado'){
        img2.classList.remove('selecionado')
        img1.classList.add('selecionado')
    }else if(img1.className == 'selecionado'){
        img1.classList.remove('selecionado')
        img3.classList.add('selecionado')
    }else if(img3.className== 'selecionado'){
        img3.classList.remove('selecionado')
        img2.classList.add('selecionado')
    }
})

sele_1.addEventListener('click', ()=>{
    img1.classList.add('selecionado')
    img2.classList.remove('selecionado')
    img3.classList.remove('selecionado')
})

sele_2.addEventListener('click', ()=>{
    img2.classList.add('selecionado')
    img1.classList.remove('selecionado')
    img3.classList.remove('selecionado')
})

sele_3.addEventListener('click', ()=>{
    img3.classList.add('selecionado')
    img1.classList.remove('selecionado')
    img2.classList.remove('selecionado')
})