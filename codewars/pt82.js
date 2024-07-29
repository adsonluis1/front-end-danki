function makeArrayJogosAnteriores (jogosAnteriores, jogoAnterior){
    if(jogosAnteriores.length == 3){
        jogosAnteriores.splice(2, 1)
        jogosAnteriores.splice(0, 0, jogoAnterior)
    }
    else if(jogosAnteriores.length < 3)
        jogosAnteriores.splice(0, 0, jogoAnterior)
    return jogosAnteriores
}

const times = [
    {
      jogos: 10,
      pontos: 25,
      gols: 18
    },
    {
      jogos: 12,
      pontos: 30,
      gols: 22
    },
    {
      jogos: 11,
      pontos: 20,
      gols: 15
    },
];
// console.log(times)
console.log(makeArrayJogosAnteriores(times,{
        jogos: 9,
        pontos: 27,
        gols: 20
      }))

// {
//     jogos: 9,
//     pontos: 27,
//     gols: 20
//   },
//   {
//     jogos: 13,
//     pontos: 35,
//     gols: 25
//   }