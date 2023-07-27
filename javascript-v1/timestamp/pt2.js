const tela = document.querySelector('#tela')
const temp = Date.now()
let tempSeg = null
const contador=()=>{
    const temp2= Date.now()
    let atual= temp2-temp
    tempSeg = Math.floor(atual/1000)
    tela.innerHTML= mostrador()
}

const mostrador=()=>{
    const tempHora= Math.floor(tempSeg/3600)
    const resto = tempSeg%3600
    const tempMin= Math.floor(resto/60)
    const segundos = Math.floor(resto%60)
    let form = `${(tempHora<10?'0'+tempHora:tempHora)}:${tempMin<10?'0'+tempMin:tempMin}:${(segundos<10?'0'+segundos:segundos)}`
    return form
}
setInterval(contador,1000)