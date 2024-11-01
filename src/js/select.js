window.addEventListener("load", () => {

    let counter = document.querySelectorAll(".sort-div")[0].children.length;

    for(let i = 1; i < counter + 1; i++){
        let sel = document.getElementById(`sel-${i}`);
        let opts = document.getElementById(`opt-${i}`);
        opts.style.width = sel.clientWidth + "px"

        let arr = opts.children[0].children;

        for(let j = 0; j < arr.length; j++){
            arr[j].onclick = () => {
                let parent = arr[j].parentElement.parentElement.parentElement;
                parent.setAttribute("value", arr[j].getAttribute("value"))
                parent.getElementsByTagName("p")[0].innerText = arr[j].innerText

                console.log(arr[j].innerText)

                for(let k = i + 1; k < counter + 1; k++){
                    document.getElementById(`sel-${k}`).getElementsByTagName("p")[0].innerText = document.getElementById(`sel-${k}`).getAttribute("def-val")
                    document.getElementById(`sel-${k}`).classList.add("disabled-sel");
                    document.getElementById(`sel-${k}`).setAttribute("value", "")
                }

                if(i < counter) document.getElementById(`sel-${i + 1}`).classList.remove("disabled-sel");
            }
        }
    }
})

window.addEventListener("resize", () => {
    let counter = document.querySelectorAll(".sort-div")[0].children.length;

    for(let i = 1; i < counter + 1; i++){
        let sel = document.getElementById(`sel-${i}`);
        let opts = document.getElementById(`opt-${i}`);

        opts.style.width = sel.clientWidth + "px"
    }
})
