const buttons= document.getElementById("button")
const body = document.getElementById("body")

buttons.addEventListener("click",()=>{
    body.style.backgroundColor="red"
    alert("You just clicked")
})