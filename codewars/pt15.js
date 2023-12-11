function solution(str, ending){
    let tam = ending.length
    let final = str.split('').reverse().slice(0,tam).reverse().toString().replace( /,/g,'')
    console.log(final == ending) 
}

solution('batata', '')