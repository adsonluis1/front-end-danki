class carros{
    constructor(tipo){
        if(tipo==1){
            this.nome= 'popular'
            this.velMAx= 100
        }else if(tipo==2){
            this.nome= 'esportivo'
            this.velMAx= 200
        }else if(tipo==2){
            this.nome= 'super esportivo'
            this.velMAx= 300
        }
    }
    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`velMAx sem turbo: ${this.velMAx}`)
        console.log(`velMAx com turbo: não tem turbo`)
    }
}
const v = 1
class carrosTurbo extends carros{
    constructor(turbo, tipo){
        super(tipo)
        this.v= 0
        if(turbo== 0){
            this.pot= 0
        }else if(turbo== 1){
            this.pot= 50
        }else if(turbo== 2){
            this.pot= 75
        }else if(turbo== 3){
            this.pot= 100
        }
    }
    info(){
        if(this.v ==1){
            super.info()
        }else{
        console.log(`nome: ${this.nome}`)
        console.log(`velMAx sem turbo: ${this.velMAx}`)
        console.log(`velMAx com turbo: ${this.velMAx + this.pot}`)
        }
    }
}

class carrosStages extends carrosTurbo{
    constructor(turbo , tipo , stage){
        super(turbo , tipo , stage)
        this.stage = stage
        this.velMAXXX = this.velMAx + this.pot
        if(stage == 1){
            this.velMAXXX+= 50
        }else if(stage ==2){
            this.velMAXXX+= 100
        }else if(stage ==3){
            this.velMAXXX+= 150
        }
    }
    info(){
        if(this.v ==1){
            super.info()
        }else{
        console.log(`nome: ${this.nome}`)
        console.log(`velMAx sem turbo: ${this.velMAx}`)
        console.log(`velMAx com turbo: ${this.velMAx + this.pot}`)
        console.log(`velMAx com stage: ${this.velMAXXX}`)
        }
    }
}
const c1= new carrosStages(2 , 2 , 2)
c1.info()