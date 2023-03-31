const controls = document.querySelectorAll(".control")

let currentItem = 0;

const items = document.querySelectorAll(".carousel-card")

const maxItems = items.length; // aqui em maxItems estou colocando a quantidade de elementos que tenho

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = 
        control.classList.contains("button-prev");
            console.log(isLeft);
        
        if(isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if(currentItem >= maxItems) {
            currentItem = 0;
        }

        if(currentItem < 0) {
            currentItem = maxItems - 1
        }
        
        items.forEach(item => item.classList.remove("current-item"))
            items[currentItem].scrollIntoView({
              inline: "center",
              behavior: "smooth",  
            })
    })
})