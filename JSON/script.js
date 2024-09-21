let main=document.querySelector(".main");

function val(){
let box1=document.createElement('div');
let Image1=document.createElement('img');
Image1.setAttribute('src','https://avatars.githubusercontent.com/u/115460382?v=4')
box1.setAttribute('class','b1');
box1.append(Image1);

let box2=document.createElement('div');
box2.setAttribute('class','b2');    
let Image2=document.createElement('img');
Image2.setAttribute('src','sir.jpeg')
box2.append(Image2);

let box3=document.createElement('div');
box3.setAttribute('class','b3');
let Image3=document.createElement('img');
Image3.setAttribute('src','https://bharatkagyan.com/wp-content/uploads/2024/02/17kohli1.jpg')
box3.append(Image3);


main.append(box1,box2,box3)
}

val()