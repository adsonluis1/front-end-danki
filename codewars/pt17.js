function highAndLow(numbers){
    const arr = numbers.split(' ')
    return [Math.max(...arr), Math.min(...arr)].join(' ')
  }

  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))