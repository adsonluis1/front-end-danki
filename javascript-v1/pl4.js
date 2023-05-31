const num = [1 , 4 , 7 ,8 ,10]
  const vnum= num.length
  if(vnum >= 1){
    const par = num.filter((e)=>{
      return e%2 == 0 
    })
    const impar = num.filter((impar)=>{
      return  impar%2 != 0
    })
    const par2 = par.map((e , i)=>{
       return e**2
    })
    const impar2 = impar.map((e , i)=>{
        return Math. sqrt(e)
    })
    const ver = par2.reduce((antes , atual)=>{
        return antes + atual
    })
    const ver2 = impar2.reduce((antes , atual)=>{
        return antes + atual
    })
    var final =(Number(ver) + Number(ver2))
    console.log(final.toFixed(2))
}