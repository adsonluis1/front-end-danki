const ctx = document.getElementById('grafico');
const num = []

let grafico1 = new Chart(ctx, {
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

const url = 'https://teste.sradson.repl.co'
const div_grafico = document.querySelector('#div_grafico')
fetch(url)
.then(res=>res.json())
.then(res=>{
    num.push(res.temperatura)
    num.push(res.pressao)
    num.push(res.nivel)
    grafico1.update()
    console.log(num)
})