function removeNoise(str){
    let verificação
    do{
	verificação = str.search( '%' , '$' , '&' , '·' , '@' , '|' , 'º' , `ª`)
    }
    while(verificação == -1){
        str.splice(verificação,1)
    }

    console.log(str)
}

removeNoise('djkhakjdhajdhahd@$%')