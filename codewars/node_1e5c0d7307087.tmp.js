function removeNoise(str){
    let verificação
    do{
	verificação = str.search( '%' , '$' , '&' , '·' , '@' , '|' , 'º' , `ª`)
    }
    while(verificação != -1){
        console.log('heheh')
    }
}

removeNoise('djkhakjdhajdhahd@$%')