window.addEventListener("scroll", () => {
    document.querySelectorAll(".cnt__header").forEach((el) => {
        const offset = el.getAttribute("data-offset-anim")
        if(window.scrollY + window.innerHeight < el.getBoundingClientRect().top + parseInt(offset, 10)){
            el.classList.add("header__hidden");
        }else{
            el.classList.remove("header__hidden");
        }
    })
})

window.addEventListener("load", () => {
    document.querySelectorAll(".cnt__header").forEach((el) => {
        const offset = el.getAttribute("data-offset-anim")
        if(window.scrollY + window.innerHeight < el.getBoundingClientRect().top + parseInt(offset, 10)){
            el.classList.add("header__hidden");
        }else{
            el.classList.remove("header__hidden");
        }
    })

    let img_to_change = document.getElementById("parallax-item");
    let children_arr = document.getElementById("banner__spinner-ul").children;

    let counter = 0;
    children_arr[counter % 3].classList.add("active_link");

    setInterval(() => {
        counter++;
        img_to_change.style.backgroundImage = `url('../../lib/img/banner_${counter % 3}.png')`;

        children_arr[(counter % 3 - 1 >= 0) ? counter % 3  - 1 : 2].classList.remove("active_link");
        children_arr[counter % 3].classList.add("active_link");

    }, 2000)
})