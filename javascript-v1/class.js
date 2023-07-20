class Pai{
    constructor(nome,idade,altura){
        this.nome=nome
        this.idade=idade
        this.altura=altura
    }
}

class filho extends Pai{
   constructor(nome,idade,altura){
    super(nome,idade,altura)
   }
}

new Pai('adson' , 18, 1.70)

console.log(new filho('eze' , 1 , 50 +'cm'));
