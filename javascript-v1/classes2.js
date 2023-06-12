const tela = document.getElementById('tela')
const txt_num = document.getElementById('txt_num')
const btn_add = document.getElementById('btn_add')
const btn_remove= document.getElementById('btn_remove')
const palco = document.getElementById('palco')
let largura_palco = palco.offsetWidth
let altura_palco= palco.offsetHeight
let bolas = []
let num_bolas = 0

class Bolas{
    constructor(palco , arraybolas){
        this.tam = Math.floor(Math.random()*20+10)
        this.velx= Math.floor(Math.random()*5+1)
        this.vely=  Math.floor(Math.random()*5+1)
        this.direcaoX=  Math.floor(Math.random()*10)>5 ? 1 : -1
        this.direcaoY=  Math.floor(Math.random()*10)>5 ? 1 : -1
        this.spanw_x= Math.floor(Math.random()*(largura_palco - this.tam))
        this.spanw_y= Math.floor(Math.random()*(altura_palco - this.tam))
        this.r=  Math.floor(Math.random()*255)
        this.g=  Math.floor(Math.random()*255)
        this.b=  Math.floor(Math.random()*255)
        this.palco = palco
        this.arraybolas= arraybolas
        this.id= Date.now()+'_'+ Math.floor(Math.random()*100000000000)
        this.desenhar()
        this.controles = setInterval(this.mexer, 10)
        this.eu = document.getElementById(this.id)
        num_bolas++
        tela.innerHTML= num_bolas
    }
    minhapos=()=>{
        return this.arraybolas.indexOf(this)
    }

    remover=()=>{
        clearInterval(this.controles)
        bolas= bolas.filter((i)=>{
            if(i.id != this.id){
                return i
            }
        })
        this.eu.remove()
        num_bolas--
        tela.innerHTML= num_bolas
    }

    desenhar=()=>{
        const div = document.createElement('div')
        div.setAttribute('id' , this.id)
        div.setAttribute('class' ,  'bolinha')
        div.setAttribute('style' , `left:${this.spanw_x}; top${this.spanw_y}; width:${this.tam}px; heigth: ${this.tam}px; background-color: rgb(${this.r}, ${this.g},${this.b})`)
        palco.appendChild(div)
    }

    controle_de_bordas=()=>{
        if(this.spanw_x + this.tam >= largura_palco){
            this.direcaoX= -1
        }else if(this.spanw_x <= 0){
            this.direcaoX=1
        }
        if(this.spanw_y + this.tam >= altura_palco){
            this.direcaoY= -1
        }else if(this.spanw_y <= 0){
            this.direcaoY=1
        }

    }

    mexer=()=>{
        this.spanw_x+= this.direcaoX*this.velx
        this.spanw_y+= this.direcaoY*this.vely
        this.controle_de_bordas()
        this.eu.setAttribute('style' , `left:${this.spanw_x}px; top:${this.spanw_y}px; width:${this.tam}px;height: ${this.tam}px; background-color: rgb(${this.r}, ${this.g},${this.b})`)
        if(this.spanw_x > largura_palco || this.spanw_y > altura_palco){
            this.remover()
        }
    }
}

window.addEventListener('resize' , ()=>{
    largura_palco = palco.offsetWidth
    altura_palco= palco.offsetHeight
})

btn_add.addEventListener('click' , ()=>{
    const qtd = txt_num
    

    for(let i = 0; i<qtd.value; i++){
        bolas.push(new Bolas(bolas, palco))
    }
})

btn_remove.addEventListener('click' , ()=>{
    bolas.map((b)=>{
        b.remover()
    })
})

