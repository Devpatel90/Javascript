fetch("https://fakestoreapi.com/products") // promise
.then((res)=>{
    return res.json();
})
.then((res)=>{
    document.querySelector(".content").innerHTML=view(res)
})
.catch((err)=>{
    console.log(err);
    
})

function view(arr){
   return arr.map((el,i)=>{
        return `
        <div class="box">
            <div class="p1">
                <div class="image">
                    <img src="${el.image}" alt="${el.title}" width="220px" height="230px"></img>
                </div>
                <div class="text">
                    <p>${el.title}</p><br>
                    <p>${el.category}</p><br>
                </div>
                    <div class="price">
                        <h2>Price:- ${el.price}</h2>
                    </div>
            </div>
        </div>
        `
    }).join("")
}