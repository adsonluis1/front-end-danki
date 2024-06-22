class Pessoa {
    name

    get getName () {
        console.log(this.name.toUpperCase())
    }

    set setNewName (newName){
        if(!newName){
            throw new Error('Digite um nome')
        }
        if(this.verify(newName)){
            throw new Error('O nome não pode ter caracteres especiais')
        }
        this.name = newName
    }

    verify (nome){
        const regEx = /[%$#@!:;?/{}]/
        return regEx.test(nome)
    }

}

const pedro = new Pessoa()

pedro.setNewName = 'pedro'
pedro.getName
