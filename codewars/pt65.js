function printerError(s) {
    erros = s.replace(/[a-m]/ig,'').split('').length
    return `${erros}/${s.split('').length}`
}

console.log(printerError('aaabbbbhaijjjm'))