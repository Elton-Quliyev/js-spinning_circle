
var yarimcevre = document.querySelector(".yarimcevre");
var btnFirla = document.querySelector(".firla");

btnFirla.addEventListener("click" , function(){
    yarimcevre.style.transform = "rotate(2160deg)"
    yarimcevre.style.transition = " all 5s"
    setTimeout(() => {
        yarimcevre.style.transform = "rotate(0deg)"
        yarimcevre.style.transition = " all 5s"
        
    }, 1500);

})