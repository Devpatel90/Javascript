let arr=[1,2,3,4,5,6]

let data=arr.map((ele,ind)=>{
    if(checkPrime(ele) == true)
    {
        return ele;
    }
    else
    {
        return 0;
    }
});

console.log(data);

function checkPrime(no)
{
    let count=0;
    for(let x=0;x<=no;x++)
    {
        if(no%x == 0)
        {
            count ++;
        }
    }

    if(count == 2)
    {
        return true;
    }

}

