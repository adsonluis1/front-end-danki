function enough(cap, on, wait) {
    // your code here
    // cap = quantidade maxima do onibos
    // on = é o número de pessoas no ônibus
    // wait = é o número de pessoas esperando para entrar no ônibus

    if(cap >= on + wait){
        return 0
    }else{
        return (cap - (on + wait)) * -1  
    }
  }

console.log(enough(10,30,5))