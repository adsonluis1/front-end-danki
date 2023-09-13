function howMuchILoveYou(nbPetals) {
    // your code
    if(nbPetals > 6){
        nbPetals = nbPetals % 6
    }
    
    switch (nbPetals){
        case 0:
            return 'not at all'
            break
        case 1:
            return 'I love you'
            break
        case 2:
            return 'a little'
            break
        case 3:
            return 'a lot'
            break
        case 4:
            return 'passionately'
            break
        case 5:
            return 'madly'
            break
        case 6:
            return 'not at all'
    }
    
}


// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
