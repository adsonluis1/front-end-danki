var lingua = []

const tela2= document.getElementById('tela2')

var Vclick1 = 0

var Vclick2 = 0

var Vclick3 = 0

var Vclick4 = 0

var Vclick5 = 0

var Vclick6 = 0

var Vclick7 = 0

var Vclick8 = 0

var Vclick9 = 0 

var Vclick10 = 0

function click1(){
    const html = document.getElementById('html')

    html.classList.toggle('selecionado')
    
    if(html.classList == 'selecionado'){
        Vclick1= true
    }else{
        Vclick1= false
    }
}  

function click2(){
    const css = document.getElementById('css')

    css.classList.toggle('selecionado')
    
    if(css.classList == 'selecionado'){
         Vclick2 = true
    }else{
        Vclick2 = false
    }
   
}

function click3(){
    const js = document.getElementById('js')

    js.classList.toggle('selecionado')

    if(js.classList == 'selecionado'){
        Vclick3 = true
    }else{
    Vclick3 = false
    }
}

function click4(){
    const php = document.getElementById('php')

    php.classList.toggle('selecionado')
    
    if(php.classList == 'selecionado'){
      Vclick4 = true
    }else{
        Vclick4 = false
    }
    
}

function click5(){
    var py = document.getElementById('py')

    py.classList.toggle('selecionado')
    
    if(py.classList == 'selecionado'){
      Vclick5 = true
    }else{
        Vclick5 = false
    }
    
   
}

function click6(){
    html2.classList.toggle('selecionado')
    
    if(html2.classList == 'selecionado'){
        Vclick6 = true
      }else{
          Vclick6 = false
      }
    
}

function click7(){
    css2.classList.toggle('selecionado')
    
    if(css2.classList == 'selecionado'){
        Vclick7 = true
      }else{
          Vclick7 = false
      }
    
}

function click8(){
    js2.classList.toggle('selecionado')
    
    if(js2.classList == 'selecionado'){
        Vclick8 = true
      }else{
          Vclick8 = false
      }
    
}

function click9(){
    php2.classList.toggle('selecionado')
    
    if(php2.classList == 'selecionado'){
        Vclick9 = true
      }else{
          Vclick9 = false
      }
    
}

function click10(){
    py2.classList.toggle('selecionado')
    
    if(py2.classList == 'selecionado'){
        Vclick10 = true
      }else{
          Vclick10 = false
      }
    
}

function passar(){
    var html2 = document.getElementById('html2')
    var css2 = document.getElementById('css2')
    var js2 = document.getElementById('js2')
    var py2 = document.getElementById('py2')

    if(Vclick1 == true){
       html2.style.display='block'
       html.style.display='none'
    }else{
        html2.style.display='none'
    }
    if(Vclick2 == true){
        css2.style.display= 'block'
        css.style.display= 'none'
    }else{
        css2.style.display='none'
    }
    if(Vclick3 == true){
        js2.style.display= 'block'
        js.style.display= 'none'
    }else{
        js2.style.display='none'
    }
    if(Vclick4 == true){
        php2.style.display= 'block'
        php.style.display= 'none'
    }else{
        php2.style.display='none'
    }
    if(Vclick5 == true){
        py2.style.display= 'block'
        py.style.display= 'none'
    }else{
        py2.style.display= 'none'
    }if(Vclick6 == true){
        html2.style.display= 'none'
        html.style.display= 'block'
    }else{
        html2.style.display= 'block'
    }
    if(Vclick7 == true){
        css2.style.display= 'none'
        css.style.display= 'block'
    }else{
        css2.style.display= 'block'
    }
    if(Vclick8 == true){
        js2.style.display= 'none'
        js.style.display= 'block'
    }else{
        js.style.display= 'block'
    }
    if(Vclick9 == true){
        php2.style.display= 'none'
        php.style.display= 'block'
    }else{
        php2.style.display= 'block'
    }
    if(Vclick10 == true){
        py2.style.display= 'none'
        py.style.display= 'block'
    }else{
        py.style.display= 'block'
    }
}
