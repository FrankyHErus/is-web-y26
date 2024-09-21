window.addEventListener("scroll", () => {
    let nav = document.getElementById("nav-wrapper")

    if(window.scrollY < 275) document.querySelectorAll(".parallax-item")[0].style.objectPosition = ((window.innerWidth < 1280) ? "calc((1920px - 100vw) / -3) " : "0 ") + 1.1 * window.scrollY + "px"

    if(window.scrollY > 0){
        nav.classList.add("colored-nav");
    }else{
        nav.classList.remove("colored-nav");
    }
})