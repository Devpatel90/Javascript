let arr=["apple", "banana", "pear"];

let data=arr.filter((ele,ind)=>{
    if(ele.length>3)
    {
        return ele;
    }
})
console.log(data);