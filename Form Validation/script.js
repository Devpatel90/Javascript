let form=document.querySelector("#form");

let arr=[]
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let isValid=true;

    document.querySelector("#usernameError").innerText="";
    document.querySelector("#emailError").innerText="";
    document.querySelector("#passwordError").innerText="";


    let username=document.querySelector("#username").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    if(username == "")
    {
        document.querySelector("#usernameError").innerText="Username Cannot be Empty";
        isValid=false;
    }
    else if(username.length < 6){
        document.querySelector("#usernameError").innerText="Username Should Greater than 6 Character";
        isValid=false;
    }

    if(email == ""){
        document.querySelector("#emailError").innerText = "Email is Compulsory" 
        isValid = false
    }

     if(password.length < 8){
        document.querySelector("#passwordError").innerText = "Password length must be 8 in Length" 
        isValid = false
     }

     if(isValid == true)    
     {
        let obj={
            username:username,
            email:email,
            password:password
        }

        arr.push(obj)
        console.log(arr);
        
     }

})