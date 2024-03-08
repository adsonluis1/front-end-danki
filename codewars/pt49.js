function removeExclamationMarks(s) {
    return s.split('').filter(e=> e != '!')
  }

console.log(removeExclamationMarks('hello word!'))