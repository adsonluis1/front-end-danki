class Vilager {
    constructor(nome,idade,poder,vida){
        this.nome = nome
        this.idade = idade
        this.poder = poder
        this.vida = vida
    }

    get showPessoa(){
        console.log(this)
    }

    receberAtaque (poder){
        this.vida = this.vida - poder <= 0 ?0 :this.vida - poder
        return this.vida
    }

    atacar (inimigo){
        console.log(`${this.nome} atacou o ${inimigo.nome}`)
        console.log(`${this.nome} deu ${this.poder} de dano em ${inimigo.nome}, ${inimigo.nome} está com ${inimigo.receberAtaque(this.poder)} de vida`)
    }
}

const aldeao = new Vilager('vladimir',33,20,300)
aldeao.showPessoa

class Ranger extends Vilager{
    constructor(nome,idade,poder,armadura,habilidade,vida){
        super(nome,idade,poder,vida)
        this.armadura = armadura
        this.habilidade = habilidade
    }
}

const guerreiro = new Ranger('Sr.Jose',25,150,true,['força','velocidade','corte dos 100 homens'],1000)
guerreiro.showPessoa
guerreiro.atacar(aldeao)

class Mago extends Ranger {
    constructor(nome,idade,poder,armadura,habilidade,vida,mana,magia){
        super(nome,idade,poder,armadura,habilidade,vida)
        this.mana = mana
        this.magia = magia
    }

    lancarMagia (inimigo){
        if(this.mana>=50){
            console.log(`${this.nome} lançou uma magia em ${inimigo.nome}`)
            console.log(`${this.nome} deu ${this.magia} de dano em ${inimigo.nome}, ${inimigo.nome} está com ${inimigo.receberAtaque(this.magia)} de vida`)
            this.mana-=50
        }else{
            console.log(`${this.nome} está sem mana`)
        }
    }

    recuperarVida (){
        this.vida+= 100
    }
}

const patolino = new Mago('Patolino',302,20,true,['magia do espaço','magia de vida'],850,2000,400)
patolino.showPessoa
patolino.lancarMagia(guerreiro)