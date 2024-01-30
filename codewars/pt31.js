function areYouPlayingBanjo(name) {
   return name.split('')[0].toLowerCase() === 'r'?`${name} plays banjo`:`${name} does not play banjo`
}

console.log(areYouPlayingBanjo('Rodriguin'))