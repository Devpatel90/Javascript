let tbody = document.querySelector("tbody")
let arr = JSON.parse(localStorage.getItem("data")) || [];


document.getElementById("formd").addEventListener("submit",(e)=>{
   e.preventDefault()
    
   let image = document.getElementById("img").value
   let title = document.getElementById("title").value
   let price = document.getElementById("price").value

   let obj = {
      IM : image,
      TI : title,
      PR : price
   }
   arr.push(obj)
   localStorage.setItem("data",JSON.stringify(arr))
   view()
})


function view(){
   tbody.innerHTML = ""
   arr.forEach((el,index)=>{
      let tr = document.createElement("tr")
      let td = document.createElement("td")
      let img = document.createElement("img")
      img.setAttribute("src",el.IM)
      img.setAttribute("alt",el.TI)
      img.setAttribute("width","400px")
      let td2 = document.createElement("td")
      td2.innerText = el.TI
      let td3 = document.createElement("td")
      td3.innerText = el.PR
      let td4 = document.createElement("td")
      let btn = document.createElement("button")
      btn.innerText = "Add To Cart"
      let cart = JSON.parse(localStorage.getItem("cart")) || []
      btn.addEventListener("click",()=>{
         cart.push(el)
         localStorage.setItem("cart",JSON.stringify(cart))
         console.log(cart)
      })
      let td5 = document.createElement("td")
      let btn2 = document.createElement("button")
      btn2.innerText = "Delete"
      btn2.addEventListener("click",()=>{
         arr.splice(index,1)
         localStorage.setItem("data",JSON.stringify(arr))
         view()
      })
      td5.append(btn2)
      td4.append(btn)
      td.append(img)
      tr.append(td,td2,td3,td4,td5)
      tbody.append(tr)
   })




}

view()
