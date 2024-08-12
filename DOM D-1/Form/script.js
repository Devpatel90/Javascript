document.addEventListener("DOMContentLoaded",()=>{

    let arr=[]
document.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(e);

    let obj={
        Username : document.querySelector("#name").value,
        Email : document.querySelector("#email").value,
        Password : document.querySelector("#password").value
    }
    arr.push(obj);
    console.log(arr);
})
})