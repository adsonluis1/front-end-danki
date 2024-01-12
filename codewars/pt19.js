function doubleChar(str) {
    let name = ''
    str.split('').forEach((evt)=> name+=evt+evt)
    console.log(name)
}
doubleChar('1234!_ ')