let images=[
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://burst.shopifycdn.com/photos/photo-of-a-cityscape-with-a-ferris-wheel.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://media.istockphoto.com/id/505239248/photo/humayun-tomb-new-delhi-india.jpg?s=612x612&w=0&k=20&c=UQTU6YOnVsSklzHi34cOhNW5AhsACDxKLiD9--T-3Kg=",
    "https://images.ctfassets.net/kftzwdyauwt9/ed21faee-ce44-4d91-f5cc39941d47/bdd3983530857e93d205304e219e2d95/dall-e.jpg?w=3840&q=90&fm=webp",
]


let a=0;

document.querySelector("#image").innerHTML=`<img src="${images[a]}" alt=${images[a]}/>`

let btn1=document.querySelector("#prev");
let btn2=document.querySelector("#next");

btn1.addEventListener("click",d1);
btn2.addEventListener("click",d2);

function d1(){
    console.log(a);
    if(a > 0){  
        a--
    }
    else{
        a = images.length -1 
    }
    document.querySelector("#image").innerHTML=`<img src="${images[a]}" alt=${images[a]}/>`
}

function d2(){
    console.log(a);
    if(a < images.length-1){
        a++;
    }else{
        a = 0
    }
    document.querySelector("#image").innerHTML=`<img src="${images[a]}" alt=${images[a]}/>`
}
