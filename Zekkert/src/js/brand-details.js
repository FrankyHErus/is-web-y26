window.addEventListener("load", () => {
    let header = document.getElementById("brand-details-header");
    let list = document.getElementById("brand-details-list");

    header.style.width = list.clientWidth + "px"

    for(let i = 0; i < document.getElementsByClassName("content-header")[0].children.length - 1; i++){
        document.getElementsByClassName("content-header")[0].children[i].setAttribute("style", "left: 250px;transform: rotateZ(0deg);")
    }
})

window.addEventListener("resize", () => {
    let header = document.getElementById("brand-details-header");
    let list = document.getElementById("brand-details-list");

    header.style.width = list.clientWidth + "px"
})
