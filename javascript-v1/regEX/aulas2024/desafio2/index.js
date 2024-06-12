const Iforms = document.querySelector('#Iforms')
const Istr = document.querySelector('#Istr')
const Ibtn = document.querySelector('#Ibtn')
const main = document.querySelector('main')
const div = document.createElement('div')
const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']
const regExData = new RegExp(/\d{1,2}\/\d{1,2}(\/\d{2,4})?/,`g`)


function formSubmit (evt){
    evt.preventDefault()
    div.innerHTML= `
    <div>
        <h1>Resultado:</h1>
        <p>${modificedData(Istr.value)}</p>
    </div>
    `
    main.appendChild(div)
}

function modificedData (data){
   const datas = data.match(regExData)
   datas.map((e)=>{
    let arr = e.split('/')
    if(e.length >= 6){
        data = data.replace(e, `${arr[0]} de ${meses[Number(arr[1])-1]} de ${arr[2]}`)
    }
    else{
        data = data.replace(e, `${arr[0]} de ${meses[Number(arr[1])-1]}`)
    }})

   return data
}

Ibtn.addEventListener('click', formSubmit)