window.addEventListener("load", () => {

    let narrowOpenBtn = document.getElementById("nav-narrow-btn")
    let narrowCloseBtn = document.getElementById("narrow-close-btn")
    let narrowNav = document.getElementById("narrow-nav")

    narrowOpenBtn.onclick = () => {
        narrowNav.classList.add("displayed-narrow");
    }

    narrowCloseBtn.onclick = () => {
        narrowNav.classList.remove("displayed-narrow");
    }

    let elements = document.getElementsByClassName("dropdown-wrapper");

    for(let id = 1; id < elements.length + 1; id++){
        let link = document.getElementById("link-" + id);
        let parent = document.getElementById("list-" + id);

        var rect = link.getBoundingClientRect();

        parent.style.left = Math.round(rect.left) + "px";
    }

    if(window.innerWidth < 1440){
        document.getElementsByClassName("search-input")[0].setAttribute("placeholder", "Поиск по модели автомобиля")
    }

    let pathname = document.location.pathname
    pathname = pathname.substring(pathname.lastIndexOf('/') + 1)
    document.querySelectorAll(`[href='./${pathname}']`).forEach(x => x.classList.add('active-link'))

})

window.addEventListener("resize", () => {
    let elements = document.getElementsByClassName("dropdown-wrapper");

    for(let id = 1; id < elements.length + 1; id++){
        let link = document.getElementById("link-" + id);
        let parent = document.getElementById("list-" + id);

        var rect = link.getBoundingClientRect();

        parent.style.left = Math.round(rect.left) + "px";
    }

    if(window.innerWidth < 1440){
        document.getElementsByClassName("search-input")[0].setAttribute("placeholder", "Поиск по модели автомобиля")
    }
})

window.addEventListener("scroll" , () => {

    let nav = document.getElementById("nav-wrapper")
    console.log("scroll");
    if(window.scrollY > 0){
        nav.classList.add("colored-nav");
    }else{
        nav.classList.remove("colored-nav");
    }
})

