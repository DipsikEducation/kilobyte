const modal = document.getElementById("burgermenu");
  const btn = document.getElementById("icon-align-left");
  const modalImage = document.querySelector("#modal-burger-btn");  



export function toggleModal() {

    
 


    if (modal.style.display === "block") {
        modal.style.display = "none";
        modalImage.setAttribute("href", "./img/noptimizesprite.svg#icon-align-left")
    } else {
        modal.style.display = "block";
        modalImage.setAttribute("href", "./img/noptimizesprite.svg#icon-x-close") 
    }
    
};

const body = document.querySelector("body");
const burgerCont = document.querySelector(".backdrop");
const burgerBtn = document.querySelector("#icon-align-left");
burgerBtn.addEventListener("click", () => {
  burgerCont.classList.toggle("is-open")
  body.classList.toggle("modal-open")
  toggleModal()
});
