const tela = document.querySelector('#tela')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const zerar = document.querySelector('#zerar')
const cortar = document.querySelector('#cortar')
const mestre = document.querySelector('#mestre')
let temp = null
let interval = null
let pode = true
let temp2 = null
let form = null
let num = 1

play.addEventListener('click', ()=>{
    temp = Date.now()
    let tempSeg = null

    const contador=()=>{
       temp2= Date.now()
        let atual= temp2-temp
        tempSeg = Math.floor(atual/1000)
        tela.innerHTML= mostrador()
    }

    const mostrador=()=>{
        console.log(temp)
        const tempHora= Math.floor(tempSeg/3600)
        const resto = tempSeg%3600
        const tempMin= Math.floor(resto/60)
        const segundos = Math.floor(resto%60)
        form = `${(tempHora<10?'0'+tempHora:tempHora)}:${tempMin<10?'0'+tempMin:tempMin}:${(segundos<10?'0'+segundos:segundos)}`
        return form
}
    interval = setInterval(contador,1000)
})

pause.addEventListener('click' , ()=>{
    clearInterval(interval)
})

zerar.addEventListener('click' , ()=>{
    clearInterval(interval)
    tela.innerHTML= '00:00:00'
    form = '00:00:00'
    mestre.innerHTML=''
})

cortar.addEventListener('click' , ()=>{
    const div = document.createElement('div')
    div.setAttribute('class' , 'cronometro')
    const label = document.createElement('label')
    label.innerHTML= `corrida ${num}`
    const p = document.createElement('p')
    mestre.appendChild(div)
    div.appendChild(label)
    div.appendChild(p)
    p.innerHTML= (form==null?'00:00:00':form)
    num++
})
