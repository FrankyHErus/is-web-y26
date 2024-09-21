window.addEventListener("load", () => {

    for(let i = 0; i < document.querySelectorAll(".slider__cnt").length; i++){
        const l_btn = document.querySelectorAll(".slider__left-btn")[i];
        const r_btn = document.querySelectorAll(".slider__right-btn")[i];
        const slider = document.querySelectorAll(".slider__cnt")[i];
        const el_width = slider.querySelectorAll(".slider__card")[0].clientWidth;
        let counter = 0;
        const max_slides = slider.querySelectorAll(".slider__card").length - 1;
        const el_margin = parseInt(slider.getAttribute("data-marginLeft"), 10);


        l_btn.onclick = () => {
            if(counter < max_slides){
                let margin = slider.style.marginLeft;

                if(isNaN(margin)){
                    slider.style.marginLeft = (margin.substring(0, margin.length - 2) - el_width - el_margin) + 'px';
                }else{
                    slider.style.marginLeft = (margin - el_width - el_margin) + 'px';
                }
                counter++;
            }
        }

        r_btn.onclick = () => {
            if(counter > 0){
                let margin = slider.style.marginLeft;

                if(isNaN(margin)){
                    slider.style.marginLeft = (parseInt(margin.substring(0, margin.length - 2), 10) + el_width + el_margin) + 'px';
                }else{
                    slider.style.marginLeft = (margin + el_width + el_margin) + 'px';
                }
                counter--;
            }
        }
    }
})