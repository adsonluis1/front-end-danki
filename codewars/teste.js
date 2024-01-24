const arr = ['a','a','c','c','x','x','e','e']

function shuffleArray(inputArray) {
    return inputArray.sort(() => Math.random() - 0.5);
  }

console.log(shuffleArray(arr))
