var istatus = document.querySelector("h2");
var addFreinds =document.querySelector('#add')
var removeFrineds = document.querySelector("#remove")

addFreinds.addEventListener("click", function(){
    istatus.innerHTML = "Friends";
     istatus.style.color= 'green'
})

removeFrineds.addEventListener('click', function() {
    istatus.innerHTML = "Stranger"
     istatus.style.color= '#777'
    if (istatus === "Friends") {
            istatus.style.color= 'green'
    }
})

