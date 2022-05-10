
let menu = document.getElementById('menu');
let NAV = document.querySelector('.NAV');

menu.addEventListener("click", () =>{
    NAV.classList.toggle("navResponsive");
});


document.getElementById("NAVV").onclick = remover;
function remover(){
    NAV.classList.toggle("navResponsive");
}

