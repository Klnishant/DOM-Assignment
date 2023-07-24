const body=document.getElementById("body")
const h1=document.getElementById("h1")

body.addEventListener("keydown",function(e){
    body.style.backgroundColor="green"
    h1.innerText=e.key +" is Down Key"
    h1.style.color="white"
})

body.addEventListener("keyup",function(e){
    body.style.backgroundColor="orange"
    h1.innerText=e.key +" is Up Key"
    h1.style.color="red"
})