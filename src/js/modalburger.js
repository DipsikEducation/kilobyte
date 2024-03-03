// document.addEventListener("DOMContentLoaded", function() {
//   var modal = document.getElementById("burgermenu");
//   var btn = document.getElementById("toggleBurgerMenuModalBtn");
//   var iconAlignLeft = document.getElementById("icon-align-left");
//   var iconUILCart = document.getElementById("icon-uil_cart");

// function toggleModal() {
//       if (modal.style.display === "block") {
//           modal.style.display = "none";
          
//           iconAlignLeft.setAttribute("xlink:href", "./img/noptimizesprite.svg#icon-align-left");
//           iconUILCart.setAttribute("xlink:href", "./img/noptimizesprite.svg#icon-x-close");
//       } else {
//           modal.style.display = "block";
          
//           iconAlignLeft.setAttribute("xlink:href", "./img/noptimizesprite.svg#icon-x-close");
//           iconUILCart.setAttribute("xlink:href", "./img/noptimizesprite.svg#icon-align-left");
//       }
//   }

//   btn.onclick = toggleModal;

//   window.onclick = function(event) {
//       if (event.target == modal) {
//           toggleModal();
//       }
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("burgermenu");
    const btn = document.getElementById("toggleBurgerMenuModalBtn");
  
    function toggleModal() {
      if (modal.style.display === "block") {
        modal.style.display = "none";
      } else {
        modal.style.display = "block";
      }
    }
  
    btn.onclick = toggleModal;
  
    window.onclick = function(event) {
      if (event.target == modal) {
        toggleModal();
      }
    }
  });
  
