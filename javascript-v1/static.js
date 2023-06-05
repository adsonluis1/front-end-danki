class carros{
    static ligado = 'nao'
    constructor(nome){
        this.nome= nome
        this.estado= 'novo'
        
    }
    static ligar= function(){
        carros.ligado = 'sim'
    }
    bateu= function(){
        this.estado= 'batido'
    }
}

const c1= new carros('fox')
const c2= new carros('gol')
const c3= new carros('crossfox')
carros.ligar()
c2.bateu()
console.log(c1.nome)
console.log(c1.estado)
console.log(carros.ligado)
console.log('-----------------')
console.log(c2.nome)
console.log(c2.estado)
console.log(carros.ligado)
console.log('-----------------')
console.log(c3.nome)
console.log(c3.estado)
console.log(carros.ligado)



