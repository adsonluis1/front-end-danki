const teste = (a)=> {
    return a.split(' ').map((e)=> e.charAt(0).toUpperCase() + e.slice(1)).join(' ')

    
};

console.log(teste('How can mirrors be real if our eyes aren/t real'))

