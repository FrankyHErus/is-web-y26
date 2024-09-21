window.addEventListener("load", () => {
    let btns = document.getElementsByClassName("radio-btn");

    for(let i = 0; i < btns.length; i++){
        let el = btns[i];
        el.addEventListener("click", () => {
            for(let j = 0; j < btns.length; j++){
                let inner_el = btns[j];
                if(inner_el.parentElement == el.parentElement) inner_el.classList.remove("selected-btn")
            }
            let data = el.getAttribute("data-value");
            el.classList.add("selected-btn");
            el.parentElement.setAttribute("value", data);
        })
    }
})
