function correct(string){
    return string.replace(/5/g,'S').replace(/1/g,'I').replace(/0/g,'O').toUpperCase()
}

console.log(correct('ad50n Lu15 r0dr1gue5 de alme1da'))