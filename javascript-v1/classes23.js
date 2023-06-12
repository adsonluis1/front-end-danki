const tela = document.getElementById('tela')
const txt_num= document.getElementById('txt_num')
const btn_add= document.getElementById('btn_add')
const btn_remove= document.getElementById('btn_remove')
const palco= document.getElementById('palco')

let array_bolas= []
let altura_palco= palco.offsetHeight
let largura_palco= palco.offsetWidth
console.log(altura_palco)
console.log(largura_palco)

class bolas{
    constructor(){
        this.tamanho= Math.floor(Math.random()*10+15)
        this.pos2X= Math.floor(Math.random()*largura_palco - this.tamanho)
        this.pos2Y= Math.floor(Math.random()*altura_palco - this.tamanho)
        this.posX= Math.floor(Math.random()*5)
        this.posY= Math.floor(Math.random()*5)
        this.velx= Math.floor(Math.random()*5)
        this.vely= Math.floor(Math.random()*5)
        this.pX = Math.floor(Math.random()*100)
        this.pY= Math.floor(Math.random()*100)
        this.r= Math.floor(Math.random()*255)
        this.g= Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.id = Date.now() + '_' + (Math.floor(Math.random()*100000000000))
    }
    nascer= ()=>{
        const div = document.createElement('div')
        div.setAttribute('id', Date.now() + '_' + this.id)
        div.setAttribute('class' , 'bolinha')
        div.setAttribute('style' , `height: ${this.tamanho}px; width: ${this.tamanho}px; background-color:rgb(${this.r}, ${this.g}, ${this.b}); left:${this.pos2X}px; top:${this.pos2Y}px `)
        palco.appendChild(div)
        array_bolas.push(div)
    }
    customizar= ()=>{
            this.id.style.height= this.tamanho+'px'
            this.id.style.width= this.tamanho+'px'
            this.id.style.backgroundColor=  `rgb(${this.r}, ${this.g}, ${this.b})`
            this.nascer()
    }
}


btn_add.addEventListener('click' , ()=>{
   for(let a = 0; a < txt_num.value;a++){
       new bolas().nascer()
       
}
})

btn_remove.addEventListener('click' , ()=>{
    
    b1.nascer()
})
