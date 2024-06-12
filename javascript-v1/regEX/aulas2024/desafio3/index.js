const obj = new Object()
let url = 'https://www.google.com/search?client=opera-gx&q=hjsahfsa&sourceid=opera&ie=UTF-8&oe=UTF-8'
const regex = /\w+=[\w-_+,.]+/ig
url.match(regex).map((ele)=>{
    const arr = ele.split('=')
    obj[arr[0]]=arr[1]
})
console.log(obj)
