function shortcut (string) {
    return string.replace(/[aeiou]/ig,'')
}

console.log(shortcut('hello'))