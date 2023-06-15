// const cursos = ['java' , 'javascript' , 'python', 'mysql' , 'node.js']
// const carros = ['gol' , 'fox' , 'ranger' , 's10']
// const funck = function getcursos(num){
//     return cursos[num]
// }
// const info = function infocursos(){
//     cursos.map((e , i)=>{
//         console.log(1+i+'°' + 'curso: ' + e)
//     })
// }


// export {cursos , carros , info}
// export default funck

// export com classes

class Pessoas{
    static pessoa= ['adson' , 'anne' , 'rafaelle' , 'luis' , 'pedro' , 'rafaella' , 'priscila' , 'henrique ']

    static getfullnomes= ()=>{
        return this.pessoa
    }

    static getnome= (i_num)=>{
        return this.pessoa[i_num]
    }

    static addnome= (nome)=>{
        this.pessoa.push(nome)
    }

    static removenome= ()=>{
        this.pessoa= []
    }
}

export default Pessoas