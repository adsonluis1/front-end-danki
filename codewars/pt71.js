// recebe uma url e retorna o dominio
function domainName(url){
    if (url.includes('http')){
        if(url.includes(`www`)){
            return url.split(`/`)[2].split(`.`)[1]       
        }
        return url.split('/')[2].split('.')[0]
    }
    else if(url.includes(`www`))
     return url.split('.')[1]
    else
      return url.split(`.`)[0]
 }

 console.log(domainName(`https://www.4s4yivaurwby630bion3pahkblr.net/`))