let arr=[2,3,4]

function doubleAndAddIndex(arr){
    let data=arr.map((ele,ind)=>{
        return (ele*2) +ind;
    
    })  
    return data
}

console.log(doubleAndAddIndex(arr));