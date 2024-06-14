const div = document.createElement('div')
const btnFinalizar = document.querySelector('#Ifinalizar')
const pError = document.createElement('p')

function addTam (salada){
    let click = ''
    const radios = document.querySelectorAll('.radioTam')
    btnFinalizar.addEventListener('click',()=>{
        pError.remove()
        for(let a = 0;a<radios.length;a++){
            if(!radios[a].checked){
                const divRadios = document.querySelector('#divRadios')
                pError.innerHTML = `Selecione o tamanho`
                divRadios.appendChild(pError)
                break
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


            console.log(salada)
       })
    }) 
}

function addObs (salada){
    
    const obs = document.querySelector('#Iobs')
    btnFinalizar.addEventListener('click',()=>{
        if(obs.value.length > 0) {
            salada.observacao= obs.value
            console.log(salada)
        }
    })
   
}

async function createTameObs (element, salada){
    div.innerHTML= `
        <div class='divtamEObs'>
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
        </div>
    `
    await element.appendChild(div)
    addTam(salada)
    addObs(salada)
}

export default createTameObs