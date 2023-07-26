const ctx = document.getElementById('grafico');
const url = 'https://teste.sradson.repl.co'
const num = []
const div_grafico = document.querySelector('#div_grafico')
fetch(url)
.then(res=>res.json())
.then(res=>{
    num.push(res.temperatura)
    num.push(res.pressao)
    num.push(res.nivel)
    console.log(num)
})



setTimeout(()=>{
    div_grafico.style.display= 'block'
},3000)
new Chart(ctx, {
type: 'bar',
data: {
    labels: ['temperatura' , 'pressão' , 'nivel'],
    datasets: [{
    label: '# of Votes',
    data: num,
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

