const div = document.getElementById("div")

div.addEventListener("mouseover",()=>{
    document.getElementById("body").style.backgroundColor="red"
    document.getElementById("h1").style.color="white"
    document.getElementById("h1").innerText="You entered in restricted area please go back"
})

div.addEventListener("mouseout",()=>{
    document.getElementById("body").style.backgroundColor="white"
    document.getElementById("h1").style.color="black"
    document.getElementById("h1").innerText="Restricted Area"
    alert("You leave restricted area safely")
})