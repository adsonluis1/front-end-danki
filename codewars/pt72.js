// function findOdd(A) {
//     const arr = []
//     A.map(e => {
//         if(arr.includes(e)){
//             arr.filter((ele)=> {
//                 if(ele.num === e)
//                     ele.quantidade++
//             })
//        }
//         else{
//             arr.push(e)
//             arr.push({
//                 num:e,
//                 quantidade:1
//             })
//         }
//     })
//     return arr.filter(e=> e.quantidade%2==1)[0].num
//   }

//   console.log(findOdd([7]))

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
console.log(findOdd([10,2,3,10,2]))