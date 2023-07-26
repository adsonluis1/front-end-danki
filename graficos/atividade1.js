const ctx = document.getElementById('grafico');
const inome = document.querySelector('#inome')
const inum = document.querySelector('#inum')
const btn = document.querySelector('#btn')
const tela_aviso = document.querySelector('#tela_aviso')
const div_grafico = document.querySelector('#div_grafico')
const btn2 = document.querySelector('#btn2')
let pode_t = true
let pode_v = true

let nome = []
let valor = []

btn.addEventListener('click' , ()=>{
    pode_t = true
    pode_v = true
    if(inome.value == ''){
        tela_aviso.innerHTML= 'precisamos de um nome no titulo'
        pode_t = false
    }
    if(inum.value == ''){
        tela_aviso.innerHTML= 'precisamos de um valor'
        pode_v = false
    }
    if(pode_t === true && pode_v === true){
    tela_aviso.innerHTML= ''
    nome.push(inome.value)
    valor.push(inum.value)
    console.log(nome)
    div_grafico.style.display='none'
    }
})

btn2.addEventListener('click' , ()=>{
    div_grafico.style.display= 'block'
})

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nome,
      datasets: [{
        label: '# of Votes',
        data: valor,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

