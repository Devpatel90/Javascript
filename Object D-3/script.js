function def(){

let arr=[
{
    quote:"You are the shuckiest shuck faced shuck in the world!",
    Name:"James Dashner"
},
{
    quote:"I think, therefore I am.",
    Name:"Rene Descartes" 
},
{
    quote:"If men were perfectly virtuous, they wouldn’t have friends.",
    Name:"Montesquieu" 
},
{
    quote:"Small things make perfection, but perfection is no small thing.",
    Name:"Sir Henry Royce" 
},
{
    quote:"A masterpiece is born a masterpiece.",
    Name:"Hyouka" 
},
{
    quote:"History will be kind to me, for I intend to write it.",
    Name:"Winston Churchill" 
},
{
    quote:"You must be the change you wish to see in the world.",
    Name:"Mahatma Gandhi" 
}
]

let a=Math.round(Math.random() * arr.length);

document.getElementById("num").innerHTML=`<h1 class="w1">${arr[a].quote}</h1> <h3 class="w1">${arr[a].Name}</h3>`;
}