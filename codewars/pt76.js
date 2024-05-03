function getMiddle(s){
   let num = s.length%2==0?[s.split('')[s.length/2-1],s.split(``)[s.length/2]]:[s.split(``)[s.length/2-0.5]]
   return num.join(``)
}

console.log(getMiddle(`testing`))
