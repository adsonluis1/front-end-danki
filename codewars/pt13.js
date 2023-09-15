function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if(Math.sqrt(sq) % 1 != 0){
        return -1
    }else{
        const h = Math.sqrt(sq) + 1
        return h * h
    }
   
  }

 console.log(findNextSquare(121))