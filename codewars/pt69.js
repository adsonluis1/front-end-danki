function latestClock(a, b, c, d) {
    const arr = [a,b,c,d].sort((a,b)=> a-b)
    console.log(arr)
    let h = ''
    for(let a = 0;a<arr.length;a++){
        if(arr.includes(2) && arr[a]!=0){
            h+= '2'
            arr.splice(arr.indexOf(2),1)
        }

        if(h.includes('2') == false && arr[a] == 1 && arr[a]!=0){
            h+=arr[a].toString()
            arr.splice(arr.indexOf(arr[a]),1)
        }

        if(h.includes('1') && h.length == 1){
            h+= Math.max(...arr).toString()
            arr.splice(arr.indexOf(Math.max(...arr)),1)
            h+= ':'
        }

        if(arr[a]<4){
            h+=arr[a].toString()
            arr.splice(arr.indexOf(arr[a]),1)
        }

        if(h.length == 2){
            h+= ':'
        }
        
        if(arr[a]<=5){
            h+=arr[a].toString()
            arr.splice(arr.indexOf(arr[a]),1)
        }

        if(arr[a]<=9){
            h+=arr[a].toString()
            arr.splice(arr.indexOf(arr[a]),1)
        }
    }
    console.log(h)
}

latestClock(1, 2, 8, 9)


// for(let a=0;a<arr.length;a++){
//     if(arr[a] <= 2 && arr[a]!= 0){
//         console.log(`add ${arr[a]}`)
//         h+=arr[a].toString()
//         arr.splice(arr.indexOf(arr[a]),1)
//     }
// }
// for(let a=0;a<arr.length;a++){
//     if(h.includes('1')){
//         console.log(`add ${Math.max(...arr)}`)
//         h+= Math.max(...arr).toString()
//         arr.splice(arr.indexOf(Math.max(...arr)),1)
//      }
// }

// for(let a=0;a<arr.length;a++){
//     if(arr[a] <4 && arr[a]!= 0){
//         console.log(`add ${arr[a]}`)
//         h+=arr[a].toString()
//         arr.splice(arr.indexOf(arr[a]),1)
//     }
// }

// for(let a=0;a<arr.length;a++){
//     if(h.length == 2){
//         console.log(`add :`)
//         h+=':'
//     }
// }

// for(let a=0;a<arr.length;a++){
//     if(arr[a]<=5){
//         console.log(`add ${arr[a]}`)
//         h+=arr[a].toString()
//         arr.splice(arr.indexOf(arr[a]),1)
//     }
// }

// for(let a=0;a<arr.length;a++){
//     if(arr[a]<=9){
//         console.log(`add ${arr[a]}`)
//         h+=arr[a].toString()
//         arr.splice(arr.indexOf(arr[a]),1)
//     }
// }