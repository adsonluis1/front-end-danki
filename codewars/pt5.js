function expressionMatter(a, b, c) {
    if(a>b & a>c){
        return (b + c) * a
    }else if(b>a & b>c){
        return (a + c) * b
    }else if(a == b & a ==c ){
        return (a + b + c)
    }
    else{
        return (a + b) * c
    }
}

console.log(expressionMatter(1, 3, 1))