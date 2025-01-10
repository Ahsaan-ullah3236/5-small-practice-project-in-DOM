
{
    let istatus = document.querySelector("h2");
    let addFreinds1 = document.querySelector('#add')
    let removeFrineds1 = document.querySelector("#remove")


    addFreinds1.addEventListener("click", function () {
        istatus.innerHTML = "Friends";
        istatus.style.color = 'green'
    })

    removeFrineds1.addEventListener('click', function () {
        istatus.innerHTML = "Stranger"
        istatus.style.color = '#777'
        if (istatus === "Friends") {
            istatus.style.color = 'green'
        }
    })
}


// Div two 
{
    let istatus = document.querySelector("h3");
    let addFreinds2 = document.querySelector('#add2')
    let check = 0;

    addFreinds2.addEventListener('click', function () {
        if (check == 0) {
            istatus.innerHTML = "Friends"
            istatus.style.color = "green"
            addFreinds2.innerHTML = "Remove Friend"
            check = 1
        }
        else{
            istatus.innerHTML = "Stranger"
            istatus.style.color = "#777"
            addFreinds2.innerHTML = "Add Friends"
            check = 0
        }
    })

}