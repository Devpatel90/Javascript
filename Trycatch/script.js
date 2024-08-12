
function checkNumber(a){
    if(a<0)
    {
        throw new Error("Negative Number");
    }
    return a;
}
try{
    console.log(checkNumber(-29));
}catch(err){
    console.log(err);
}finally{
    console.log("sherr");
}