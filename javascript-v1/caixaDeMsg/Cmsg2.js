class Msg{
    constructor(texto,titulo,jeito){
        this.cor= 'blue'
        this.jeito = jeito
        this.texto=texto
        this.titulo=titulo
        this.local=document.body
        this.main= document.querySelector('main')
    }

    fazer= ()=>{
    const style_section=
        'position: absolute;'+
        'display: flex;'+
        'align-items: center;'+
        'justify-content: center; '+ 
        'top:  0px;'+
        'left: 0px;'+
        'width: 100%;'+
        'height: 100vh;'+
        'background-color: rgba(0, 0, 0, 0.7);'
    
    const section = document.createElement('section')
    section.setAttribute('style' , style_section)
    this.local.prepend(section)
    const style_div=
        'width: 400px;'+
        'height: 300px;'+
        'background-color: white;'+
        'display: flex;'+
        'flex-direction: column;'
    
    const div = document.createElement('div')
    div.setAttribute('class' , style_div)
    section.prepend(div)
    const style_h1=
       ' width: 100%;'+
        'height: 50px;'+
        'font-size: 2em;'+
        'background-color: blue;'+
       ' color: white;'+
        'display: flex;'+
       ' justify-content: center;'+
        'align-items: center;'
    
    const h1= document.createElement('h1')
    h1.setAttribute('style' , style_h1)
    div.prepend(h1)
    h1.innerText= this.titulo
    const style_article=
        'padding: 5px;'+
        'height: 100%;'+
        'display: flex;'+
        'align-items: center;'+
        'background-color: white;'+
        'min-height: 100px;'+
        'font-size: 1.5em;'
    
    const article = document.createElement('article')
    article.setAttribute('style' , style_article)
    article.innerText= this.texto
    div.appendChild(article)
    const style_footer=
       ' width: 100%;'+
        'height: 50px;'+
       ' display: flex;'+
        'align-items: end;'
    
    const footer = document.createElement('footer')
    footer.setAttribute('style', style_footer)
    div.appendChild(footer)
    const style_nav=
        'width: 100%;'+
        'height: 50px;'+
       ' background-color: blue;'+
        'display: flex;'+
        'justify-content: center;'+
        'align-items: center;'
    
    const nav = document.createElement('nav')
    nav.setAttribute('style', style_nav)
    footer.prepend(nav)
    const style_button=
        'width: 60px;'+
        'height: 30px;'+
        'margin-left: 10px;'
    if(this.jeito == 'padrao'){
    const button = document.createElement('button')
    button.setAttribute('style' , style_button)
    button.innerText= 'Ok'
    nav.prepend(button)
    button.addEventListener('click' , ()=>{
        this.local.removeChild(section)
    })
    }
    else if(this.jeito == 'sn'){
        const btn_s= document.createElement('button')
        btn_s.setAttribute('style' , style_button)
        btn_s.innerHTML= 'Sim'
        nav.prepend(btn_s)
        btn_s.addEventListener('click' , ()=>{
           const iframe = document.querySelector('iframe')
           iframe.style.display= 'block'
            new Msg().sumir()
        })
        const btn_n= document.createElement('button')
        btn_n.setAttribute('style' , style_button)
        btn_n.innerHTML='Não'
        btn_n.addEventListener('click' , ()=>{
            new Msg().sumir()
        })
        nav.appendChild(btn_n)

    }
    

    }

    sumir=()=>{
        const section = document.querySelector('section')
        this.local.removeChild(section)
    }
}

export{Msg}
