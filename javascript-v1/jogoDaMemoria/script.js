const sectionNotification = document.querySelector('.secttionNotification')
const divCards = document.querySelectorAll('.card')
const btnReiniciar = document.querySelector('#btnReiniciar')
const telaVidas = document.querySelector('#vidas')
const cardsPrincipais = [
    {
        title:'angolano hacker',
        url:'angolano_hacker.jpg',
        id:1,
        certo:false
    },
    {
        title:'angolano espadachim',
        url:'angolano_espada.jpeg',
        id:2,
        certo:false
    },
    {
        title:'angolano estiloso',
        url:'angolano_estiloso.jpeg',
        id:3,
        certo:false
    }
]

let fullCards = cardsPrincipais.concat(cardsPrincipais)
fullCards = fullCards.sort(()=> Math.random() - 0.5)

let vidas = 5

if(localStorage.getItem('cards') == null){
    localStorage.setItem('cards',JSON.stringify(fullCards))
}else {
    fullCards = JSON.parse(localStorage.getItem('cards'))
}

if(localStorage.getItem('vidas') == null){
    localStorage.setItem('vidas',vidas)
}else{
    vidas = Number(localStorage.getItem('vidas'))
}

function resetar (){
    localStorage.clear()
    location.href=  'index.html'
}

btnReiniciar.addEventListener('click',resetar)

let select = null
// localStorage.clear()

function renderizar (){
    telaVidas.innerText = vidas
    console.log(fullCards)
    divCards.forEach((divCard,index)=>{
        const img = document.createElement('img')
        let {url,id,title,certo} = fullCards[index]
        img.src = `./img/${url}`
        img.setAttribute('class','cardImg')
        img.setAttribute('data-id', id)
        img.setAttribute('data-title', title)
        certo? img.classList.add("acertou"):''
        divCard.appendChild(img)
        divCard.addEventListener('click',(evt)=>{
            vidas = Number(localStorage.getItem('vidas'))
            if(vidas > 0 && document.querySelectorAll('.select').length <= 2){
                evt.target.classList.add('select')
                if(localStorage.getItem('select') === null || localStorage.getItem('select') === 'null'){            
                    localStorage.setItem('select',JSON.stringify({url,id,title}))
                }else {
                    select = JSON.parse(localStorage.getItem('select'))
                    if(select.id == id){
                        document.querySelectorAll('.select').forEach((currentSelect)=>{
                            currentSelect.classList.remove('select')
                            currentSelect.classList.add('acertou')
                            fullCards.map((card)=>{
                                if(card.id == id || card.id == select.id){
                                    card.certo = true
                                }
                            }) 
                            console.log(fullCards)
                            localStorage.setItem('cards',JSON.stringify(fullCards))
                        })
                    }else{
                        vidas--
                        localStorage.setItem('vidas', vidas)
                        document.querySelectorAll('.select').forEach((currentSelect)=>{
                            setTimeout(()=>{
                                currentSelect.classList.remove('select')
                            },1700)
                        })
                        telaVidas.innerText = vidas
                    }

                    localStorage.setItem('select', "null")
                }
            }

            if(vidas == 0) {
                document.querySelector('.notification').innerText = 'Poxa, suas vidas acabaram.'
                sectionNotification.classList.add('show')
            }
            
            if(document.querySelectorAll('.select').length > 1){
                document.querySelectorAll('.card').forEach((card)=>{
                    card.style = 'cursor: not-allowed;pointer-events: none;'
                    setTimeout (()=>{
                        card.style = 'cursor: pointer;pointer-events: all;'
                    },2000)
                })
            }

            if(document.querySelectorAll('.acertou').length == 6){
                document.querySelector('.notification').innerText = 'Parabens, você ganhou.'
                sectionNotification.classList.add('show')
            }
        })
    })
}

renderizar()
