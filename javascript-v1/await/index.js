async function teste (){
    console.log('iniciou')
    
    await new Promise((aceitar)=>{
        aceitar('heheheh')
    })
    .then((resultado)=>{
        console.log(resultado)
    })

    console.log('terminou')
}

teste()
