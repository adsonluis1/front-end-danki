let valores = [2 , 50]
        const op=[
            (val)=>{
                let res=0
                for(v of val){
                    res+= v
                }
                return res
            },
            (val)=>{
                let res=1
                for(v of val){
                    res*= v
                }
                return res
            },
            ()=>{
                let res = 0
                valores.map((e)=>{
                    res+= e
                })
                return res
            }
        ]

            console.log(op[2](valores))


const num1 = 10
const num2 = 20

const adsin = [
()=>{
    return num1 + num2
},
()=>{
    return num1 - num2
}
]

console.log(adsin[0]())
