const body=document.getElementById("body")

body.addEventListener("dblclick",()=>{
    body.style.backgroundColor="black"
    document.getElementById("h1").style.color="white"
})

body.addEventListener("dblclick",()=>{
    alert("You double clicked succesfully")
})