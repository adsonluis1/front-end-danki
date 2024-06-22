class Pedido {
    constructor(id,data,itens,price,user){
        this.id = id
        this.data = data
        this.itens = itens
        this.price = price
        this.user = user
    }

    showPedido () {
        console.log({user: this.user, itens: this.itens, price:this.price})
    }
}

const itens = ['Hambuguer', 'batata frita', 'Coca-cola']

const pedido01 = new Pedido(103,new Date,itens,55,'Adson793')
console.log(pedido01)
pedido01.showPedido()