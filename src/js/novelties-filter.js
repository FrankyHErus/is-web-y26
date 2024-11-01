window.addEventListener("load", () => {

    const menu = document.getElementById("novelties-filter-cnt");
    const close_btn = document.getElementById("narrow-filter-close");
    const open_btn = document.getElementById("narrow-filter-open");

    close_btn.onclick =() => {
        menu.classList.add("hidden");
        close_btn.classList.add("hidden");
    }

    open_btn.onclick =() => {
        menu.classList.remove("hidden");
        close_btn.classList.remove("hidden");
    }
})