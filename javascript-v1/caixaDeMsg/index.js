import { Msg } from "./Cmsg.js";

const btn= document.querySelector('#btn')

const configuracao={
    cor:'blue',
    titulo:'teste',
    texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, temporibus iure. Blanditiis voluptas sapiente qui eveniet amet perspiciatis ratione sunt. Beatae quasi molestias rem tempore officiis vero, necessitatibus quos laudantium!'
}



btn.addEventListener('click', ()=>{    
    new Msg(configuracao).fazer()
    
})



