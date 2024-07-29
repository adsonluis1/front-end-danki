const times = [
    {
      pontos: 28,
      vitorias: 9,
      saldoGols: 12,
      golsMarcados: 22,
      posicao: 1
    },
    {
      pontos: 28,
      vitorias: 9,
      saldoGols: 12,
      golsMarcados: 25,
      posicao: 2
    },
    {
      pontos: 25,
      vitorias: 8,
      saldoGols: 100,
      golsMarcados: 20,
      posicao: 3
    },
    {
      pontos: 24,
      vitorias: 7,
      saldoGols: 8,
      golsMarcados: 18,
      posicao: 4
    },
    {
      pontos: 22,
      vitorias: 6,
      saldoGols: 7,
      golsMarcados: 17,
      posicao: 5
    },
    {
      pontos: 20,
      vitorias: 6,
      saldoGols: 5,
      golsMarcados: 15,
      posicao: 6
    },
    {
      pontos: 18,
      vitorias: 5,
      saldoGols: 3,
      golsMarcados: 13,
      posicao: 7
    },
    {
      pontos: 16,
      vitorias: 4,
      saldoGols: 2,
      golsMarcados: 12,
      posicao: 8
    },
    {
      pontos: 14,
      vitorias: 4,
      saldoGols: 1,
      golsMarcados: 10,
      posicao: 9
    },
    {
      pontos: 12,
      vitorias: 3,
      saldoGols: -1,
      golsMarcados: 8,
      posicao: 10
    }
];

const updatedtable = times.sort((a,b)=>{
    if(b.pontos != a.pontos)
        return b.pontos - a.pontos
    
    else if(b.vitorias != a.vitorias)
        return b.vitorias - a.vitorias
    // saldo de gols
    else if(b.saldoGols != a.saldoGols)
        return b.saldoGols - a.saldoGols

    // mais gols pro
    else if(b.golsMarcados != a.golsMarcados)
        return b.golsMarcados - a.golsMarcados
})

updatedtable.map((time, index)=>{
    time.posicao = index+1 
})

console.log(updatedtable)