let arr=['a','b','c','d','e']

let data=arr.map((ele,ind)=>{
    if(ele=='b'){
        return ele='z'
    }
    else
    {
        return ele;
    }
})

console.log(data);