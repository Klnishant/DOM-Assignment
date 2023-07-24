const input=document.getElementById("input")
const h1=document.getElementById("h1")

input.addEventListener("keypress",function(e){
    h1.innerText="You have pressed "+e.key
})