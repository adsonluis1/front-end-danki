const btn= document.getElementById('btn')
const main = document.getElementById('tela')

btn.addEventListener('click' , ()=>{
    // main.setAttribute('style' , `backgroun-color: rgb(${r},${g},${b});`)
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    main.style.backgroundColor= `rgb(${r},${g},${b})`

    console.log(Math.floor(Math.random()*255))
})