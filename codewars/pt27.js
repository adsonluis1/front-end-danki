function calculateYears(principal, interest, tax, desired) {
    let a = 0
    let y = 0
    if(principal < desired){
        while(desired >= principal){
            a = principal * interest
            principal += a-(tax*a).toFixed(2)
            y++
        }
        return y
    }
    return y
}

calculateYears(1000.00,0.05,0.18,1100.00)