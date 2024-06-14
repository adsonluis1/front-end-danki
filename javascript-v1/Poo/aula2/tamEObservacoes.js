const div = document.createElement('div')
const btnFinalizar = document.querySelector('#Ifinalizar')
const pError = document.createElement('p')

function addTam (salada){
    let click = ''
    const radios = document.querySelectorAll('.radioTam')
    btnFinalizar.addEventListener('click',()=>{
        pError.remove()
        for(let a = 0;a<radios.length;a++){
            if(radios[a].checked){
                pError.remove()
                break
            }
            else{
                const divRadios = document.querySelector('#divRadios')
                pError.innerHTML = `Selecione o tamanho`
                divRadios.appendChild(pError)
            }
        }
    })

    radios.forEach((e)=>{
       e.addEventListener('click',(evt)=>{
            click = evt.target.value
            salada.tamanho=click
            if(click == 'Pequeno') salada.preco=3
            if(click == 'Medio') salada.preco=4
            if(click == 'Grande') salada.preco=5
       })
    }) 
}

function addObs (salada){
    const obs = document.querySelector('#Iobs')
    obs.addEventListener('input',()=>{
        if(/\w+/ig.test(obs.value)){
            salada.observacao = obs.value
        }
    })
}

async function createTameObs (element, salada){
    div.setAttribute('class','divtamEObs')
    div.innerHTML= `
        <form>
            <div id="divRadios">
                <input  value='Pequeno' class='radioTam' type="radio" name="tam" id="Ip">
                <label for="Ip">Pequeno</label>
                <input  value='Medio' class='radioTam' type="radio" name="tam" id="Im">
                <label for="Im">Medio</label>
                <input  value='Grande' class='radioTam' type="radio" name="tam" id="Ig">
                <label for="Ig">Grande</label>
            </div>
            
            <input placeholder='Digite sua observação' type="text" name="" id="Iobs">
            </form>
    `
    await element.appendChild(div)
    addTam(salada)
    addObs(salada)
}

export default createTameObs